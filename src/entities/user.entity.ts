import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ unique: true })
  username: string;

  @Column({ select: false })
  password: string;
}
