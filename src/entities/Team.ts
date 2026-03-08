import { PrimaryColumn, Column, Entity, OneToMany } from "typeorm";
import { User } from "./User";
import { ColumnEntity } from "./Column";
@Entity()
export class Team {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => User, (user) => user.teams)
  owner: User;

  @OneToMany(() => ColumnEntity, (column) => column.team)
  columns: ColumnEntity[];
}