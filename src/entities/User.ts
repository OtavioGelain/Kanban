import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Team } from './Team';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 75})
  name: string;

  @Column({type: 'varchar', length: 125})
  email: string;

  @Column({type: 'varchar', length: 125})
  password: string;

  @ManyToOne(() => Team, (team) => team.owner)
  teams: Team[];
}