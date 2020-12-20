import { body } from "express-validator";

const username = body('username').isLength({ min: 4, max: 16 });
const password = body('password').isStrongPassword({ minLength: 4 });

const carState = body('state').custom(state =>
    Number.isInteger(state.tirePressure) &&
    Number.isInteger(state.petrol) &&
    typeof state.ignition === 'boolean'
);

export default {
    signIn: [username, password],
    signUp: [username, password],
    carState: [carState]
}