import { body } from "express-validator";

export const createUserValidador = [
    body('name')
    .notEmpty()
    .withMessage("Name is required"),

    body('email')
    .isEmail()
    .withMessage('Invalid format email'),

    body('password')
    .isLength({ min: 6})
    .withMessage('Password must have at least 6 characters')
]