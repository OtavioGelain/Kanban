import { TaskController } from "../controllers/taskController";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authHandler";

export const taskRouter = Router();

taskRouter.get('/', authMiddleware, TaskController.showTasks);
taskRouter.get('/:id', authMiddleware, TaskController.showTaskById);
taskRouter.post('/', authMiddleware, TaskController.createTask);
taskRouter.put('/:id', authMiddleware, TaskController.updateTask);
taskRouter.delete('/:id', authMiddleware, TaskController.deleteTask);
taskRouter.put('/:id/move', authMiddleware, TaskController.moveTask);