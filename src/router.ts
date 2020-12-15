import express from "express";
import AuthController from "./controllers/auth.controller";
import UserController from "./controllers/user.controller";
import authMiddleware from "./middlewares/auth.middleware";
import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.json({ type: "*/json" }));

router.get("/sign-in", AuthController.signIn);
router.get("/sign-up", AuthController.signUp);

router.use(authMiddleware);

router.get("/users/:id", UserController.getById);
router.post("/users", UserController.create);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

export default router;
