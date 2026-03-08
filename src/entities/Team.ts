import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { User } from "./User";
import { ColumnEntity } from "./Column";
@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'varchar', length: 255})
  description: string;

  @OneToMany(() => User, (user) => user.teams)
  owner: User;

  @OneToMany(() => ColumnEntity, (column) => column.team)
  columns: ColumnEntity[];
}