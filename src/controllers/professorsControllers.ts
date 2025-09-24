import { Request, Response } from 'express';

class professorsController {
    constructor() {}

    consult(req: Request, res: Response) {
        res.json({ msg: 'professors consult'});
    }

    consultById(req: Request, res: Response) {
        res.json({ msg: 'professor consult by id'});
    }


    create(req: Request, res: Response) {
        res.json({ msg: 'professor created'});
    }

    update(req: Request, res: Response) {
        res.json({ msg: 'professor updated'});
    }

    delete(req: Request, res: Response) {
        res.json({ msg: 'professor deleted'});
    }
}
export const professorsControllers = new professorsController();