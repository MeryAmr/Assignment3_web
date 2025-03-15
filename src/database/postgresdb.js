require('dotenv').config();
const { Client } = require('pg');
const postcon = new Client({
    user: 'ziusudra',
    host: 'localhost',
    port: 5432,
    database: 'blogres',
    password: '1234',
});
async function postGreRun() {
    try {
        await postcon.connect();
        console.log('Connected to the PostgreSQL database');
        await postcon.query('CREATE SCHEMA IF NOT EXISTS blog');
        await postcon.query(`
            CREATE TABLE IF NOT EXISTS blog.authors(
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(150) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT NOW()
                );`);
    }
    catch (err) {
        console.error(err);
    }

}
module.exports = {postGreRun, postcon};
