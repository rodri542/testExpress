import 'dotenv/config';
import { DataSource } from "typeorm";

if (!process.env.DB_USER || !process.env.DB_NAME) {
  throw new Error('Missing DB_USER or DB_NAME in environment (.env not loaded or variables absent)');
}


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})

export default AppDataSource;

