import { Request, Response } from "express";
import { ColumnService } from "../services/columnService";

export class ColumnController {
    static async showColumns(req: Request, res: Response): Promise<Response> {
        try {
            const columns = await ColumnService.showColumns();
            return res.status(200).json(columns);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching columns' });
        }
    }
    static async showColumnById(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if(!id){
                return res.status(400).json({ message: 'Invalid column ID' });
            }
            const column = await ColumnService.showColumnById(id);
            return res.status(200).json(column);
        } catch (error) {
            return res.status(404).json({ message: 'Internal server Error' });
        }
    }
    static async createColumn(req: Request, res: Response): Promise<Response> {
        try {
            const column = await ColumnService.createColumn(req.body);
            return res.status(201).json(column);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }   
    static async updateColumn(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if(!id){
                return res.status(400).json({ message: 'Invalid column ID' });
            }
            const column = await ColumnService.updateColumn(id, req.body);
            return res.status(200).json(column);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    static async deleteColumn(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if(!id){
                return res.status(400).json({ message: 'Invalid column ID' });
            }
            const column = await ColumnService.deleteColumn(id);
            return res.status(200).json(column);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    static async moveColumn(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            const teamId = Number(req.body.teamId);
            if(!id || !teamId){
                return res.status(400).json({ message: 'Invalid column or team ID' });
            }
            const column = await ColumnService.moveColumn(id, teamId);
            return res.status(200).json(column);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}