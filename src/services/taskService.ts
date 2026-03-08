import { Task } from "../entities/Task";
import { AppDataSource } from "../database/data-source";

const taskRepository = AppDataSource.getRepository(Task);

export class TaskService {
    static async showTasks(): Promise<Task[]> {
        const tasks = await taskRepository.find({ relations: ['column'] });
        return tasks;
    }
    static async showTaskById(id: number): Promise<Task | null> {
        const task = await taskRepository.findOne({ where: { id }, relations: ['column'] });
        if (!task) {
            throw new Error('Task not found');
        }
        return task;
    }
    static async createTask(taskData: Partial<Task>): Promise<Task> {
        const task = taskRepository.create(taskData);
        if(!task.title || !task.description || !task.column) {
            throw new Error('All fields are mandatory');
        }
        await taskRepository.save(task);
        return task;
    }
    static async updateTask(id: number, taskData: Partial<Task>): Promise<Task> {
        const task = await taskRepository.findOneBy({ id });
        if (!task) {
            throw new Error('Task not found');
        }
        taskRepository.merge(task, taskData);
        await taskRepository.save(task);
        return task;
    }
    static async deleteTask(id: number): Promise<Task> {
        const task = await taskRepository.findOneBy({ id });
        if (!task) {
            throw new Error('Task not found');
        }
        await taskRepository.remove(task);
        return task
    }
    static async moveTask(id: number, columnId: number): Promise<Task> {
        const task = await taskRepository.findOneBy({ id });
        if (!task) {
            throw new Error('Task not found');
        }
        task.column = { id: columnId } as any;
        await taskRepository.save(task);
        return task;
    }
}