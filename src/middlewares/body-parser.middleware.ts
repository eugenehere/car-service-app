import { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";

export default function (req: Request, res: Response, next: NextFunction) {
  bodyParser.json({ type: "*/json" })(req, res, (error) => {
    if (error) {
      return res.status(400).json({ ok: 0, message: error.message });
    }
    next();
  });
}
