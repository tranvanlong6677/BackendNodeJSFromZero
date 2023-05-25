import express from "express";
import {
  getSample,
  getCreatePage,
  postCreateUser,
  getAllUser,
  getDeleteUser,
  getSubmitEdit,
  getEditUserPage,
} from "../controllers/homeControllers.js";

const router = express.Router();

router.post("/create-user", postCreateUser);
router.get("/create",getCreatePage);
router.get("/sample", getSample);
router.get("/delete-user/:id",getDeleteUser )
router.get("/edit-user/:id",getEditUserPage)
router.post("/edit-user-submit/:id",getSubmitEdit)

export default router;
