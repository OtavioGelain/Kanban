import { User } from "../entities/User";
import { AppDataSource } from "../database/data-source";
import { encryptedHash } from "../utils/encryptedHash";
import { generateToken } from "../utils/generateToken";
import bcrypt from 'bcrypt';

const userRepository = AppDataSource.getRepository(User);

export class UserService {
    static async showUsers(): Promise<User[]> {
        const users = await userRepository.find();
        return users;
    }
    static async showUserById(id: number): Promise<User | null> {
        const user = await userRepository.findOneBy({ id });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    static async createUser(userData: Partial<User>): Promise<User> {
        const hashedPassword = await encryptedHash(userData.password!); 
        const user = userRepository.create({ ...userData, password: hashedPassword });
        if(!user.name || !user.email || !user.password) {
            throw new Error('All fields are mandatory');
        }
        await userRepository.save(user);
        return user;
    }
    static async updateUser(id: number, userData: Partial<User>): Promise<User> {
        const user = await userRepository.findOneBy({ id });
        if (!user) {
            throw new Error('User not found');
        }
        userRepository.merge(user, userData);
        await userRepository.save(user);
        return user;
    }
    static async deleteUser(id: number): Promise<User> {
        const user = await userRepository.findOneBy({ id });
        if (!user) {
            throw new Error('User not found');
        }
        await userRepository.remove(user);
        return user;
    }
    static async loginUser(email: string, password: string): Promise<User & { token: string }> {
        const user = await userRepository.findOneBy({ email });
        if (!user) {
            throw new Error('Invalid email');
        }
        const isPasswordValid = await  bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        const token = generateToken(user);
        return { ...user, token };
    }
}