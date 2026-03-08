import { Column , Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ColumnEntity } from './Column';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar'})
  title: string;

  @Column({type: 'varchar', length: 255})
  description: string;

  @ManyToOne(() => ColumnEntity, (column) => column.tasks)
  column: ColumnEntity;
}