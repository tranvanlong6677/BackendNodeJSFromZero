import express from "express";
import { getUsersAPI,postUserAPI } from "../controllers/apiController.js";

const routerAPI = express.Router();

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postUserAPI);




export default routerAPI;
