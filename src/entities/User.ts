import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Team } from './Team';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Team, (team) => team.owner)
  teams: Team[];
}