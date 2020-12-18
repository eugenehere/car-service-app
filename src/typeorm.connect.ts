import { createConnection } from "typeorm";
import env from "./env";

createConnection({
    type: "postgres",
    ssl: true,
    url: env.PG_URI,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    // host: env.PG_HOST,
    // username: env.PG_USER,
    // password: env.PG_PASSWORD,
    // database: env.PG_DATABASE,
    // port: Number(env.PG_PORT),
    entities: [
        __dirname  + "/entities/*.js"
    ],
    synchronize: true,
    // logging: true,
});