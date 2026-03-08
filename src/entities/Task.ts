import { Column , Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ColumnEntity } from './Column';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => ColumnEntity, (column) => column.tasks)
  column: ColumnEntity;
}