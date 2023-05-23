import express from "express";
import {
  getHomePage,
  getSample,
  getCreatePage,
  postCreateUser,
  getAllUser,
} from "../controllers/homeControllers.js";

const router = express.Router();

router.get("/", getHomePage);
router.post("/create-user", postCreateUser);
router.get("/create",getCreatePage);
router.get("/sample", getSample);

export default router;
