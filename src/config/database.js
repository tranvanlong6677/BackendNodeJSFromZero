import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD
  });

export default connection;