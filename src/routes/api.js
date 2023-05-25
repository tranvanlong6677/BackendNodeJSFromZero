import express from "express";
import { getUsersAPI } from "../controllers/apiController.js";

const routerAPI = express.Router();

routerAPI.get("/abc", (req, res) => {
  res.status(200).json({
    data: "Hello abc",
  });
});
routerAPI.get("/users", getUsersAPI);

export default routerAPI;
