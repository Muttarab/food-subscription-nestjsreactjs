import { TypeOrmModuleOptions } from "@nestjs/typeorm";
require('dotenv').config({ path: '.env' })
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true,
    url: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
}