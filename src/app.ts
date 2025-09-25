import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(cors());

import studentsRoutes from './routes/studentsRoutes';
import professorRoutes from './routes/professorRoutes';

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.use('/students', studentsRoutes);
app.use('/professors', professorRoutes);

export default app;
