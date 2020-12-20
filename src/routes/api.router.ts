import express from "express";
import authMiddleware from "../middlewares/auth.middleware";
import bodyParser from "body-parser";
import authRouter from "./auth.router";
import userRouter from "./user.router";

export default express.Router()
    .use(bodyParser.json({ type: "*/json" }))
    .use(authRouter)
    .use(authMiddleware)
    .use("/user", userRouter);