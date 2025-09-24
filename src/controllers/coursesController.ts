import { Request, Response } from 'express';

class coursesControllers {
    constructor() {}

    consult(req: Request, res: Response) {
        res.json({ msg: 'course consult'});
    }

    consultById(req: Request, res: Response) {
        const { id } = req.params;
        res.json({ msg: `course consult by id: ${id}`});

    }


    create(req: Request, res: Response) {
        res.json({ msg: 'course created'});
    }

    update(req: Request, res: Response) {
        res.json({ msg: 'course updated'});
    }

    delete(req: Request, res: Response) {
        res.json({ msg: 'course deleted'});
    }
}
export const coursesController = new coursesControllers();