import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(cors());

import studentsRoutes from './routes/studentsRoutes';
import professorRoutes from './routes/professorRoutes';

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/students', studentsRoutes);
app.use('/professors', professorRoutes);

app.listen(6500, () => {
  console.log('Server is running on port 6500');
});

