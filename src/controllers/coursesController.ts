import { Request, Response } from 'express';

class coursesControllers {
  constructor() {}

  consult(req: Request, res: Response) {
    try {
      res.json({ msg: 'course consult' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  consultById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      res.json({ msg: `course consult by id: ${id}` });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  create(req: Request, res: Response) {
    try {
      res.json({ msg: 'course created' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  update(req: Request, res: Response) {
    try {
      res.json({ msg: 'course updated' });
    } catch (error) {
      if (error instanceof Error) {
        +res.status(500).json({ msg: error.message });
      }
    }
  }

  delete(req: Request, res: Response) {
    try {
      res.json({ msg: 'course deleted' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  addStudent(req: Request, res: Response) {
    try {
      res.json({ msg: 'student added to course' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }
}
export const coursesController = new coursesControllers();