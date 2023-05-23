import express from "express";
import {
  getHomePage,
  getSample,
  getCreatePage,
  postCreateUser,
  getAllUser,
  getDeleteUser,
  getSubmitEdit,
  getEditUserPage,
} from "../controllers/homeControllers.js";

const router = express.Router();

router.get("/", getHomePage);
router.post("/create-user", postCreateUser);
router.get("/create",getCreatePage);
router.get("/sample", getSample);
router.get("/delete-user/:id",getDeleteUser)
router.get("/edit-user/:id",getEditUserPage)
router.post("/edit-user-submit/:id",getSubmitEdit)

export default router;
