import express from "express";
import {
  getUsersAPI,
  postUserAPI,
  postUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesApi,
} from "../controllers/apiController.js";
import { postCreateCustomer } from "../controllers/customerController.js";

const routerAPI = express.Router();
// Users
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postUserAPI);
routerAPI.put("/users/:id", postUpdateUserAPI);
routerAPI.delete("/users/:id", deleteUserAPI);
routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFilesApi);

// Customers
routerAPI.post("/customers", postCreateCustomer);

export default routerAPI;
