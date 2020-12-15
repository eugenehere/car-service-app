import jwt from "jsonwebtoken";

export default function authMiddleware(req: any, res: any, next: any) {
  const { authorization } = req.headers;
  const { JWT_SECRET } = process.env;

  if (!JWT_SECRET) return res.status(500).end();
  if (!authorization) return res.status(401).end();

  const match = authorization.match(/^Bearer (.*)$/);
  if (!match) return res.status(401).end();
  const token = match[1];

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error });
  }
}
