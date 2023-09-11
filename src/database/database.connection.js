import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const configDatabase = { connectionString: process.env.DATABASE_URL, ssl: false };

if (process.env.NODE_ENV === "production") configDatabase.ssl = true;

const db = new Pool(configDatabase);

db.connect((error, client, done) => {
  if (error) {
    console.error('Error connecting to PostgreSQL', error);
  } else {
    console.log('--------------- Conected to PostgreSQL');
    done();
  }
});

export default db;
