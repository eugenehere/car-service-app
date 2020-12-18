import jwt from "jsonwebtoken";
import env from "../env";

export default function authMiddleware(req: any, res: any, next: any) {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      throw new Error("Authorization required.");
    }
  
    const match = authorization.match(/^Bearer (.*)$/);
    if (!match) {
      throw new Error("Invalid authorization token provided.");
    }

    // check for user existance

    const token = match[1];
    req.user = jwt.verify(token, env.JWT_SECRET);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ ok: 0, message: error.message });
  }
}
