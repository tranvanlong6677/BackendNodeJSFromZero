import express from "express";
import {
  getHomePage,
  getSample,
  postCreateUser,
} from "../controllers/homeControllers.js";

const router = express.Router();

router.get("/", getHomePage);
router.post("/create-user", postCreateUser);
router.get("/sample", getSample);

export default router;
