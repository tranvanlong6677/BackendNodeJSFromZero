import mysql from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     port:process.env.DB_PORT,
//     password:process.env.DB_PASSWORD,
//   });

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    connectionLimit:10,
    waitForConnections: true,
    queueLimit:0
  });

export default connection;