import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Team } from './Team';
import { Task } from './Task';

@Entity()
export class ColumnEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  priority: number;

  @ManyToOne(() => Team, (team) => team.owner)
  team: Team;

  @OneToMany(() => Task, (task) => task.column)
  tasks: Task[];
}