import { Request, Response } from 'express';
import { Professor } from '../models/professorsModel';

class professorsController {
  constructor() {}

  async consult(req: Request, res: Response) {
    try {
      const professors = await Professor.find();

      res.status(200).send({ msg: professors });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  async consultById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).send({ msg: 'No id provided' });

      const professor = await Professor.findOneBy({ id: parseInt(id) });

      res.status(200).send({ msg: professor });
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

      const createdProfessor = await Professor.create({
        dni: body?.dni,
        name: body?.name,
        lastname: body?.lastname,
        age: body?.age,
        phone: body?.phone,
        profession: body?.profession,
      });

      await createdProfessor.save();

      res.status(201).send({ msg: 'professor created', professor: createdProfessor });
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

      await Professor.update({ id: parseInt(id) }, { ...req.body });

      res.status(200).send({ msg: 'professor updated' });
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

      const deletedProfessor = await Professor.delete({ id: parseInt(id) });

      res.status(200).send({ msg: 'professor deleted', professor: deletedProfessor.affected });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({ msg: error.message });
      }
    }
  }
}
export const professorsControllers = new professorsController();
