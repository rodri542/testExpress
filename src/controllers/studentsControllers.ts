import { Request, Response } from 'express';
import { Student } from '../models/studentsModel';

class studentsControllers {
  constructor() {}

  async consult(req: Request, res: Response) {
    try {
      const students = await Student.find();
      console.log(students);

      res.status(200).send({ msg: students, total: students.length });
    } catch {
      res.status(500).send({ error: "Couldn't retrieve students" });
    }
  }

  async consultById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).send({ msg: 'No id provided' });

      const student = await Student.findOneBy({ id: parseInt(id) });

      res.status(200).send({ msg: student });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({ msg: error.message });
      }
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { body } = req;
      console.log(body);

      if (!body) return res.status(400).send({ msg: 'No data provided' });

      const createdStudent = await Student.create({
        dni: body?.dni,
        name: body?.name,
        lastname: body?.lastname,
        age: body?.age,
      });

      await createdStudent.save();

      res.status(201).send({ msg: 'students created', student: createdStudent });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({ msg: error.message });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!req.body || !id) return res.status(400).send({ msg: 'No data provided' });

      await Student.update({ id: parseInt(id) }, { ...req.body });

      res.status(200).send({ msg: 'student updated' });
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
      const deletedStudent = await Student.delete({ id: parseInt(id) });

      res.status(200).send({ msg: 'student deleted', student: deletedStudent.affected });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }
}
export const studentsController = new studentsControllers();
