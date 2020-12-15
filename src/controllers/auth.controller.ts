import jwt from "jsonwebtoken";

export default class AuthController {
  static async signIn(req: any, res: any) {
    const { login, password } = req.body;
    const { JWT_SECRET } = process.env;

    if (!JWT_SECRET) return res.status(500);

    // lookup in database

    const token = jwt.sign({ id: 1 }, JWT_SECRET, { expiresIn: 900 });

    res.status(200).json({ token });
  }

  static async signUp() {}
}
