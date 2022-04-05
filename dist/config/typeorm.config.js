"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
require('dotenv').config({ path: '.env' });
exports.typeOrmConfig = {
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
};
//# sourceMappingURL=typeorm.config.js.map