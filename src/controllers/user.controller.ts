import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/user.entity';

export default class UserController {
  static async get(req: Request, res: Response, next: NextFunction) {
    const userRepository = getRepository(User);
    try {
      const user = await userRepository.findOne(req.user.id);
      if (!user) throw new Error("User not found.");
      res.status(200).json({ ok: 1, user });
    } catch (error) {
      res.status(500).json({ ok: 0, message: error.message });
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {}
  static async delete(req: Request, res: Response, next: NextFunction) {}
}
