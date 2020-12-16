import jwt from "jsonwebtoken";

export default function authMiddleware(req: any, res: any, next: any) {
  const { authorization } = req.headers;
  const { JWT_SECRET } = process.env;

  if (!JWT_SECRET) return res.status(500).end();

  try {
    if (!authorization) {
      throw new Error("Authorization required.");
    }
  
    const match = authorization.match(/^Bearer (.*)$/);
    if (!match) {
      throw new Error("Invalid authorization token provided.");
    }

    const token = match[1];
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ ok: 0, message: error.message });
  }
}
