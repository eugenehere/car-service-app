import jwt from "jsonwebtoken";
import bcrypt  from 'bcrypt';
import env from "../env";
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { getRepository } from "typeorm";
import User from "../entities/user.entity";

export default class AuthController {
  static async signIn(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    const userRepository = getRepository(User);
    let user: User | undefined;

    try {
      validationResult(req).throw();
    } catch (error) {
      return res.status(400).json({ ok: 0, validation: error.mapped() });
    }

    try {
      user = await userRepository
        .createQueryBuilder("user")
        .addSelect("user.password")
        .where({ username })
        .getOne();
      
      if (!user) throw new Error("User not found.");

      const matched = await bcrypt.compare(password, user.password);
      if (!matched) throw new Error("Wrong password.");
    } catch (error) {
      return res.status(400).json({ ok: 0, message: error.message });
    }

    try {
      const payload = {
        id: user.id,
        username: user.username
      };
      const token = jwt.sign(payload, env.JWT_SECRET, { expiresIn: '1d' });
      res.status(200).json({ ok: 1, token });
    } catch (error) {
      console.log(error);
      res.status(401).json({ ok: 0, message: error.message });
    }
  }

  static async signUp(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    const userRepository = getRepository(User);

    try {
      validationResult(req).throw();
    } catch (error) {
      return res.status(400).json({ ok: 0, validation: error.mapped() });
    }

    try {
      const user = await userRepository.findOne({ username });
      if (user) throw new Error("This username is not available.");
    } catch (error) {
      return res.status(400).json({ ok: 0, message: error.message });
    }

    try {
      const hash = await bcrypt.hash(password, 10);
      const user = userRepository.create({ username, password: hash });
      await userRepository.save(user);
      res.status(200).json({ ok: 1, message: "User created successfully." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ ok: 0, message: error.message });
    }
  }
}
