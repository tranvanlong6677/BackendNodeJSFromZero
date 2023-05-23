import mysql from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const dbState = [{
  value: 0,
  label: "disconnected"
},
{
  value: 1,
  label: "connected"
},
{
  value: 2,
  label: "connecting"
},
{
  value: 3,
  label: "disconnecting"
}];
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
  try {
    await mongoose.connect("mongodb://root:123456@127.0.0.1:27018/");
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value == state).label, "to database");
  } catch (error) {
    console.log(error);
  }
};

export default connection;
