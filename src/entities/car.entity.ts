import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  saloon: string;

  @Column()
  image: string;
}
