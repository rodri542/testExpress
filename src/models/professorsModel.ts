import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('professors')
export class Professor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 20, unique: true })
  dni!: string;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'varchar', length: 100 })
  lastname!: string;

  @Column({ type: 'int' })
  age!: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  phone!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  profession!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}