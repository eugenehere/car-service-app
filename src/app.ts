import express from "express";
import apiRouter from "./routes/api.router";
import path from "path";

const app = express();
// app.use("/api", apiRouter);
app.use("/", express.static("public"));

app.use("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../../public/index.html"));
});

export default app;
