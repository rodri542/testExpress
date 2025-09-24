import { testConnection } from '../database/connection';
import { Request, Response } from 'express';

class studentsControllers {
  constructor() {}

  async consult(req: Request, res: Response) {
    try {
      await testConnection();
      res.json({ msg: 'students consult' });
    } catch (err) {
      console.error('DB check failed in consult:', err);

      res.status(500).json({ error: 'Database connection failed' });
    }
  }

  consultById(req: Request, res: Response) {
    const { id } = req.params;
    res.json({ msg: `students consult by id: ${id}` });
  }

  create(req: Request, res: Response) {
    res.json({ msg: 'students created' });
  }

  update(req: Request, res: Response) {
    res.json({ msg: 'students updated' });
  }

  delete(req: Request, res: Response) {
    res.json({ msg: 'students deleted' });
  }
}
export const studentsController = new studentsControllers();