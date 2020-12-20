import express from "express"
import UserController from "../controllers/user.controller";

export default express.Router()
    .get("/", UserController.get)
    .put("/", UserController.update)
    .delete("/", UserController.delete);