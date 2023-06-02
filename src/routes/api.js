import express from "express";
import {
  getUsersAPI,
  postUserAPI,
  postUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesApi,
} from "../controllers/apiController.js";
import { postCreateCustomer,postCreateCustomerArr,getAllCustomers ,putUpdateCustomers,deleteCustomer,deleteCustomers} from "../controllers/customerController.js";
import {postProject,getProject} from '../controllers/projectController.js'
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
routerAPI.post("/customers-many", postCreateCustomerArr);

routerAPI.get("/customers",getAllCustomers);
routerAPI.put("/customers/:id",putUpdateCustomers);
routerAPI.delete("/customers/:id",deleteCustomer);
routerAPI.delete("/customers-many",deleteCustomers);

routerAPI.post("/projects",postProject);
routerAPI.get("/projects",getProject);






export default routerAPI;
