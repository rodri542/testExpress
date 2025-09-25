import { Request, Response } from 'express';
import { Course } from '../models/courseModel';
import { Professor } from '../models/professorsModel';
import { Student } from '../models/studentsModel';

class coursesControllers {
  constructor() {}

  async consult(req: Request, res: Response) {
    try {
      const courses = await Course.find({ relations: { professor: true, students: true } });

      res.status(200).send({ msg: courses });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async consultById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ msg: 'No id provided' });
      const course = await Course.findOneBy({ id: parseInt(id) });

      res.status(200).send({ msg: course });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { body } = req;
      if (!body) return res.status(400).json({ msg: 'No data provided' });

      const { idProfessor } = body;

      const professor = await Professor.findOneBy({ id: parseInt(idProfessor) });
      if (!professor) return res.status(404).send({ msg: 'Professor not found' });

      const course = await Course.create({
        name: body?.name,
        description: body?.description,
        professor: body?.idProfessor,
      });
      await course.save();

      res.status(201).send({ msg: course });
    } catch (error) {
      console.log('something went wrong');
      if (error instanceof Error) {
        res.status(500).send({ msg: error.message });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).send({ msg: 'No id provided' });

      const { body } = req;
      if (!body) return res.status(400).send({ msg: 'No data provided' });

      const { idProfessor } = body;
      const professor = await Professor.findOneBy({ id: parseInt(idProfessor) });
      if (!professor) return res.status(404).send({ msg: 'Professor not found' });

      const course = await Course.findOneBy({ id: parseInt(id) });
      if (!course) return res.status(404).send({ msg: 'Course not found' });

      await Course.update(
        { id: parseInt(id) },
        { name: body?.name, description: body?.description, professor: idProfessor },
      );
      res.status(200).send({ msg: 'Course updated' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({ msg: error.message });
      }
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).send({ msg: 'No id provided' });

      const course = await Course.findOneBy({ id: parseInt(id) });
      if (!course) return res.status(404).send({ msg: 'Course not found' });

      await Course.delete({ id: parseInt(id) });
      res.status(200).send({ msg: 'Course deleted', course });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({ msg: error.message });
      }
    }
  }

  async addStudent(req: Request, res: Response) {
    try {
      console.log(req.params);
      const { courseId, studentId } = req.params;
      if (!courseId || !studentId)
        return res.status(400).send({ msg: 'courseId and studentId are required' });

      const student = await Student.findOneBy({ id: parseInt(studentId) });
      if (!student) return res.status(404).send({ msg: 'Student not found' });

      const course = await Course.findOne({
        where: { id: parseInt(courseId) },
        relations: ['students'],
      });
      if (!course) return res.status(404).send({ msg: 'Course not found' });

      course.students.push(student);
      await course.save();

      res.status(200).send({ msg: 'student added to course' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({ msg: error.message });
      }
    }
  }
}
export const coursesController = new coursesControllers();
