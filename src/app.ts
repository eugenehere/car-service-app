import express from "express";
import router from "./router";

const app = express();
app.use("/api", router);
app.use(express.static("public"));

export default app;