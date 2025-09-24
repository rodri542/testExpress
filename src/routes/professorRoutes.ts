import express from 'express';
import { professorsControllers } from '../controllers/professorsControllers';

const router = express.Router();

    router.get('/', professorsControllers.consult);
    router.post('/', professorsControllers.create);

    router.route('/:id')
        .get(professorsControllers.consultById)
        .put(professorsControllers.update)
        .delete(professorsControllers.delete);

export default router;

