import { Request, Response } from 'express';

class professorsController {
  constructor() {}

  consult(req: Request, res: Response) {
    try {
      res.json({ msg: 'professors consult' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  consultById(req: Request, res: Response) {
    try {
      res.json({ msg: 'professor consult by id' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  create(req: Request, res: Response) {
    try {
      res.json({ msg: 'professor created' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  update(req: Request, res: Response) {
    try {
      res.json({ msg: 'professor updated' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }

  delete(req: Request, res: Response) {
    try {
      res.json({ msg: 'professor deleted' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  }
}
export const professorsControllers = new professorsController();