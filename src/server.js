import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
import configViewEngine from "./config/viewEngine.js";
import webRoutes from "./routes/web.js";
import connection from "./config/database.js";
import mongoose from "mongoose";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || "localhost";

// config viewEngine
configViewEngine(app);

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// webRoutes
app.use("/", webRoutes);

// test connection
const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model("Kitten", kittySchema);
const silence = new Kitten({ name: "Silence" });
silence.save();

(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
