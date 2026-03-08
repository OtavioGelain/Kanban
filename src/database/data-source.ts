import 'reflect-metadata'
import { DataSource } from 'typeorm';
import { env } from '../env/envSchema';
import { User } from '../entities/User';
import { Team } from '../entities/Team';
import { ColumnEntity } from '../entities/Column';
import { Task } from '../entities/Task';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  entities: [User, Team, ColumnEntity, Task],
  synchronize: false,
  migrations: ['src/database/migrations/*.ts'],
});