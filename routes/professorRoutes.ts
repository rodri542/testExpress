import express from 'express';
import { professorController } from '../controllers/professorsControllers';

const router = express.Router();

    router.get('/', professorController.consult);
    router.post('/', professorController.create);

    router.route('/:id')
        .get(professorController.consultById)
        .put(professorController.update)
        .delete(professorController.delete);

export default router;

