import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import studentsRoutes from './routes/studentsRoutes';
import professorRoutes from './routes/professorRoutes';
import coursesRoutes from './routes/coursesRoutes';

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.use('/students', studentsRoutes);
app.use('/professors', professorRoutes);
app.use('/courses', coursesRoutes);

export default app;
