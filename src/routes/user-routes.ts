import { UserController } from "../controllers/userController";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authHandler";
import { createUserValidador } from "../middlewares/emailValidator";

export const userRouter = Router();

userRouter.get('/', authMiddleware, UserController.showUsers);
userRouter.get('/:id', authMiddleware, UserController.showUserById);
userRouter.post('/auth/register', createUserValidador, UserController.createUser);
userRouter.post('/auth/login',UserController.loginUser);
userRouter.put('/:id', authMiddleware, UserController.updateUser);
userRouter.delete('/:id', authMiddleware, UserController.deleteUser);
