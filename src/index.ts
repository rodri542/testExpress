import express from 'express';

const app = express();
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

