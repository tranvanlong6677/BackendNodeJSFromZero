import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
import configViewEngine from "./config/viewEngine.js";
import webRoutes from "./routes/web.js";
import apiRoutes from "./routes/api.js";
import connection from "./config/database.js";
import fileUpload from "express-fileupload";
import { MongoClient } from "mongodb";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
// default options
app.use(fileUpload());

// config viewEngine
configViewEngine(app);

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// webRoutes
app.use("/", webRoutes);
app.use("/v1/api/", apiRoutes);

// test connection

(async () => {
  try {
    // using mongoose
    // await connection();

    // using mongodb driver
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);

    const dbName = process.env.DB_NAME;
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');
    app.listen(port, hostname, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
