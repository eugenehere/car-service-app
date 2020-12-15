import express from "express";
import dotenv from "dotenv";
import router from "./router";
dotenv.config();

const app = express();

app.use("/api", router);

app.use(express.static("public"));

const { PORT = 3000 } = process.env;

app.listen(PORT);

console.log(`Server started on port ${PORT}`);
