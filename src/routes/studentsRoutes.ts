import express from 'express';
import { studentsController } from '../controllers/studentsControllers';

const router = express.Router();

router.get('/', studentsController.consult);
router.post('/', studentsController.create);

router
  .route('/:id')
  .get(studentsController.consultById)
  .put(studentsController.update)
  .delete(studentsController.delete);

export default router;
