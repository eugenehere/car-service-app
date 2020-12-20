import jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import User from "../entities/user.entity";
import env from "../env";

export default async function authMiddleware(req: any, res: any, next: any) {
  const { authorization } = req.headers;
  const userRepository = getRepository(User);

  try {
    if (!authorization) {
      throw new Error("Authorization required.");
    }

    const match = authorization.match(/^Bearer (.*)$/);
    if (!match) {
      throw new Error("Invalid authorization token provided.");
    }

    const token = match[1];
    const payload: any = jwt.verify(token, env.JWT_SECRET);

    if (!Number.isInteger(payload?.id))
      throw new Error("Invalid token payload.");
    if (!payload.username?.length) throw new Error("Invalid token payload.");

    const user = await userRepository.findOne(payload.id);
    if (!user) throw new Error("User not found.");

    req.user = payload;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ ok: 0, message: error.message });
  }
}
