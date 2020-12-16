import { Pool } from 'pg';

const {
    PG_HOST,
    PG_USER,
    PG_PASSWORD,
    PG_DATABASE,
    PG_PORT
} = process.env;

const pool = new Pool({
    host: PG_HOST,
    user: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
    port: PG_PORT
});

export default {
    query: async (text: string, params?: any) => {
        return pool.query(text, params);
    }
}