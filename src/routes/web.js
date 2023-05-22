import express from "express";
import {getHomePage,getSample} from '../controllers/homeControllers.js'

const router = express.Router();

router.get("/", getHomePage);

router.get("/sample", getSample);

export default router;
