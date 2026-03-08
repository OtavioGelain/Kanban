import { Router } from "express";
import { columnRouter } from "./column-routes"; 
import { taskRouter } from "./task-routes";
import { teamRouter } from "./team-routes";
import { userRouter } from "./user-routes";

export const router = Router()

router.use('/teams', teamRouter);
router.use('/users', userRouter);
router.use('/columns', columnRouter);
router.use('/tasks', taskRouter);