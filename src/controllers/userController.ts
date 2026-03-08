import { Request, Response, } from "express";
import { UserService } from "../services/User";

export class UserController {
    static async showUsers(req: Request, res: Response): Promise<Response> {
        try {
            const users = await UserService.showUsers();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching users' });
        }
    }
    static async showUserById(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            const user = await UserService.showUserById(id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(404).json({ message: 'User not found' });
        }
    }
    static async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const user = await UserService.createUser(req.body);
            return res.status(201).json(user);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }   
    static async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if(!id){
                return res.status(400).json({ message: 'Invalid user ID' });
            }
            const user = await UserService.updateUser(id, req.body);
            return res.status(200).json(user);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    static async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if(!id){
                return res.status(400).json({ message: 'Invalid user ID' });
            }
            const user = await UserService.deleteUser(id);
            return res.status(200).json(user);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    static async loginUser(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;
            const userWithToken = await UserService.loginUser(email, password);

            return res.status(200).json({message: 'Login successful', userWithToken});
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}