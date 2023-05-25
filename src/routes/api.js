import express from "express";
import { getUsersAPI,postUserAPI,postUpdateUserAPI } from "../controllers/apiController.js";

const routerAPI = express.Router();

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postUserAPI);
routerAPI.put("/users/:id", postUpdateUserAPI);





export default routerAPI;
