import {Request, Response} from 'express';
import { TaskService } from '../services/taskService';

export class TaskController {
    static async showTasks(req: Request, res: Response): Promise<Response> {
        try {
            const tasks = await TaskService.showTasks();
            return res.status(200).json(tasks);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching tasks' });
        }
    }
    static async showTaskById(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if(!id){
                return res.status(400).json({ message: 'Invalid task ID' });
            }
            const task = await TaskService.showTaskById(id);
            return res.status(200).json(task);
        } catch (error) {
            return res.status(404).json({ message: 'Internal server Error' });
        }
    }
    static async createTask(req: Request, res: Response): Promise<Response> {
        try {
            const task = await TaskService.createTask(req.body);
            return res.status(201).json(task);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }   
    static async updateTask(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if(!id){
                return res.status(400).json({ message: 'Invalid task ID' });
            }
            const task = await TaskService.updateTask(id, req.body);
            return res.status(200).json(task);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    static async deleteTask(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if(!id){
                return res.status(400).json({ message: 'Invalid task ID' });
            }
            const task = await TaskService.deleteTask(id);
            return res.status(200).json(task);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    static async moveTask(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            const columnId = Number(req.body.columnId);
            if(!id || !columnId){
                return res.status(400).json({ message: 'Invalid task or column ID' });
            }
            const task = await TaskService.moveTask(id, columnId);
            return res.status(200).json(task);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}