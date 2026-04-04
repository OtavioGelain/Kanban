import jwt from 'jsonwebtoken';
import { User } from '../entities/User';
import { env } from '../env/envSchema';

export function generateToken(user: User): string | undefined{
  const secretKey = env.JWT_SECRET 
  const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
  return token;
}