import express from "express";
import authMiddleware from "../middlewares/auth.middleware";
import authRouter from "./auth.router";
import userRouter from "./user.router";
import carRouter from "./car.router";
import bodyParserMiddleware from "../middlewares/body-parser.middleware";

export default express.Router()
    .use(bodyParserMiddleware)
    .use(authRouter)
    .use(authMiddleware)
    .use("/user", userRouter)
    .use("/car", carRouter);