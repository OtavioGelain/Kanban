import { TeamController } from "../controllers/teamController";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authHandler";

export const teamRouter = Router();

teamRouter.get('/', authMiddleware, TeamController.showTeams);
teamRouter.get('/:id', authMiddleware, TeamController.showTeamById);
teamRouter.post('/', authMiddleware, TeamController.createTeam);
teamRouter.put('/:id', authMiddleware, TeamController.updateTeam);
teamRouter.delete('/:id', authMiddleware, TeamController.deleteTeam);