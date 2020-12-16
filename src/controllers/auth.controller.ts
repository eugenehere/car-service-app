import jwt from "jsonwebtoken";
import bcrypt  from 'bcrypt';
import database from "../database";

export default class AuthController {
  static async signIn(req: any, res: any) {
    const { username, password } = req.body;
    const { JWT_SECRET } = process.env;

    if (!JWT_SECRET) return res.status(500);

    try {
      // lookup in database
      // const { rows } = await database.query(`SELECT * FROM users WHERE username = $1`, [username]);

      const hash = 'test';
      const matched = await bcrypt.compare(password, hash);

      if (!matched) {

      }

      const token = jwt.sign({ id: 1, username }, JWT_SECRET, { expiresIn: '1d' });

      res.status(200).json({ ok: 1, token });
    } catch (error) {
      console.log(error);
      res.status(401).json({ ok: 0, message: error.message });
    }
  }

  static async signUp(req: any, res: any) {
    const { username, password } = req.body;

    // validate

    const hash = await bcrypt.hash(password, 10);

    // create user in database

    res.status(200).json({ ok: 1, message: "User created successfully." });
  }
}
