import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    dni!: string;

    @Column()
    name!: string;

    @Column()
    lastname!: string;

    @Column()
    age!: number;
    
    @CreateDateColumn()
    createdAt!: Date;
    
    @UpdateDateColumn()
    updatedAt!: Date;
}