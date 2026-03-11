import { Request, Response } from "express";
import { TeamService } from "../services/teamService";

export class TeamController {
    static async showTeams(req: Request, res: Response): Promise<Response> {
        try {
            const teams = await TeamService.showTeams();
            return res.status(200).json(teams);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching teams' });
        }
    }
    static async showTeamById(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if(!id){
                return res.status(400).json({ message: 'Invalid team ID' });
            }
            const team = await TeamService.showTeamById(id);
            return res.status(200).json(team);
        } catch (error) {
            return res.status(404).json({ message: 'Internal server Error' });
        }
    }
    static async createTeam(req: Request, res: Response): Promise<Response> {
        try {
            const team = await TeamService.createTeam(req.body);
            return res.status(201).json(team);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }   
    static async updateTeam(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if(!id){
                return res.status(400).json({ message: 'Invalid team ID' });
            }
            const team = await TeamService.updateTeam(id, req.body);
            return res.status(200).json(team);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    static async deleteTeam(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if(!id){
                return res.status(400).json({ message: 'Invalid team ID' });
            }
            const team = await TeamService.deleteTeam(id);
            return res.status(200).json(team);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    static async showTeamColumns(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if(!id){
                return res.status(400).json({ message: 'Invalid team ID' });
            }
            const team = await TeamService.showTeamColumns(id);
            return res.status(200).json(team);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    static async addUserToTeam(req: Request, res: Response): Promise<Response> {
        try {
            const teamId = Number(req.params.teamId);
            const userId = Number(req.params.userId);
            if(!teamId || !userId){
                return res.status(400).json({ message: 'Invalid team ID or user ID' });
            }
            const team = await TeamService.addUserToTeam(userId, teamId);
            return res.status(200).json(team);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    static async removeUserFromTeam(req: Request, res: Response): Promise<Response> {
        try {
            const teamId = Number(req.params.teamId);
            const userId = Number(req.params.userId);
            if(!teamId || !userId){
                return res.status(400).json({ message: 'Invalid team ID or user ID' });
            }
            const team = await TeamService.removeUserFromTeam(userId, teamId);
            return res.status(200).json(team);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}