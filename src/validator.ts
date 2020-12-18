import { body } from "express-validator";

const username = body('username').isLength({ min: 4, max: 16 });
const password = body('password').isLength({ min: 4, max: 16 });

export default {
    signIn: [username, password],
    signUp: [username, password],
}