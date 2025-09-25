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
    try {
      const { id } = req.params;
      res.json({ msg: `students consult by id: ${id}` });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  create(req: Request, res: Response) {
    try {
      res.json({ msg: 'students created' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  update(req: Request, res: Response) {
    try {
      res.json({ msg: 'students updated' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  delete(req: Request, res: Response) {
    try {
      res.json({ msg: 'students deleted' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }
}
export const studentsController = new studentsControllers();