import express from 'express';
import { coursesController } from '../controllers/coursesController';

const router = express.Router();

router.get('/', coursesController.consult);
router.post('/', coursesController.create);
router.post('/addStudent/:courseId/:studentId', coursesController.addStudent);

router
  .route('/:id')
  .get(coursesController.consultById)
  .put(coursesController.update)
  .delete(coursesController.delete);

export default router;
