import mysql from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const dbState = [
  {
    value: 0,
    label: "disconnected",
  },
  {
    value: 1,
    label: "connected",
  },
  {
    value: 2,
    label: "connecting",
  },
  {
    value: 3,
    label: "disconnecting",
  },
];
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     port:process.env.DB_PORT,
//     password:process.env.DB_PASSWORD,
//   });

// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     port:process.env.DB_PORT,
//     password:process.env.DB_PASSWORD,
//     connectionLimit:10,
//     waitForConnections: true,
//     queueLimit:0
//   });

const connection = async () => {
  const options = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    dbName:process.env.DB_NAME,
  };
  await mongoose.connect(process.env.DB_HOST, options);
  const state = Number(mongoose.connection.readyState);
  console.log(dbState.find((f) => f.value == state).label, "to database");
};

export default connection;
