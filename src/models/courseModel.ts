import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Professor } from './professorsModel';
import { Student } from './studentsModel';

@Entity('courses')
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: 'varchar', length: 100 })
  description!: string;

  @ManyToOne(() => Professor, professor => professor.courses)
  @JoinColumn({ name: 'professor_id' })
  professor!: Professor;

  @ManyToMany(() => Student)
  @JoinTable({
    name: 'student_courses',
    joinColumn: { name: 'course_id' },
    inverseJoinColumn: { name: 'student_id' },
  })
  students!: Student[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
