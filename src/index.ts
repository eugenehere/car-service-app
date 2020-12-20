import app from "./app";
import "reflect-metadata";
import "./typeorm.connect";
import env from "./env";

async function start() {
  app.listen(env.PORT);
  console.log(`Server started on port ${env.PORT}`);
}

start();
