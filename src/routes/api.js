import express from "express";
import {
  getUsersAPI,
  postUserAPI,
  postUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi
} from "../controllers/apiController.js";

const routerAPI = express.Router();

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postUserAPI);
routerAPI.put("/users/:id", postUpdateUserAPI);
routerAPI.delete("/users/:id", deleteUserAPI);
routerAPI.post("/file", postUploadSingleFileApi);


export default routerAPI;
