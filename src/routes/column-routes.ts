import { ColumnController } from "../controllers/columnController";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authHandler";

export const columnRouter = Router();

columnRouter.get('/', authMiddleware, ColumnController.showColumns);
columnRouter.get('/:id', authMiddleware, ColumnController.showColumnById);
columnRouter.post('/', authMiddleware, ColumnController.createColumn);
columnRouter.put('/:id', authMiddleware, ColumnController.updateColumn);
columnRouter.delete('/:id', authMiddleware, ColumnController.deleteColumn);
columnRouter.put('/:id/move', authMiddleware, ColumnController.moveColumn);