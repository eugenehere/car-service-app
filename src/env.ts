import dotenv from "dotenv";
dotenv.config();

const { JWT_SECRET } = process.env;
if (!JWT_SECRET) throw new Error("Missing JWT_SECRET.");

export default {
  JWT_SECRET,
  PORT: process.env.PORT || 3000,
  PG_HOST: process.env.PG_HOST,
  PG_USER: process.env.PG_USER,
  PG_PASSWORD: process.env.PG_PASSWORD,
  PG_DATABASE: process.env.PG_DATABASE,
  PG_PORT: process.env.PG_PORT,
  PG_URI: process.env.PG_URI,
};
