import express from "express";
import AuthController from "./controllers/auth.controller";
import UserController from "./controllers/user.controller";
import authMiddleware from "./middlewares/auth.middleware";
import bodyParser from "body-parser";
import validator from "./validator";


const router = express.Router();

router.use(bodyParser.json({ type: "*/json" }));

router.get("/sign-in", validator.signIn, AuthController.signIn);
router.get("/sign-up", validator.signUp, AuthController.signUp);

router.use(authMiddleware);

router.get("/user", UserController.get);
router.put("/user", UserController.update);
router.delete("/user", UserController.delete);

export default router;
