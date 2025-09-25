import app from './app';
import { AppDataSource } from './db/connection';

async function main() {
  try {
    const connection = await AppDataSource.initialize();
    console.log('Database connected:', connection.isInitialized);

    app.listen(6500, () => {
      console.log('Server is running on port 6500');
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error during Data Source initialization:', error.message);
    }
  }
}

main();
