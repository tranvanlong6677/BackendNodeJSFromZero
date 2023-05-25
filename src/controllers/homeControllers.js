import { isValidObjectId } from "mongoose";
import connection from "../config/database.js";
import User from "../models/Users.js";
import mongoose from "mongoose";



const getSample = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;

  // const [rows, fields] = await connection.execute(
  //   "INSERT INTO Users (email,name,city) VALUES (?,?,?)",
  //   [email, name, city]
  // );
  await User.create({ email, name, city });

  res.send("Create user success");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

function validateObjectId (id) {
  if (ObjectId.isValid(id)) {
      const obj = new ObjectId(id);
      if (obj == id) {
          return true;
      }
  }
  return false;
}

const getAllUser = async (req, res) => {
  // connection.query(`SELECT * FROM Users`, function (err, results, fields) {
  //   console.log(results);
  // });
  const [rows, fields] = await connection.execute("SELECT * FROM Users");
};

const getDeleteUser = async (req, res) => {
  let id = req.params.id;
  // const [rows, fields] = await connection.execute(
  //   "DELETE FROM Users WHERE id=?",
  //   [id]
  // );
  await User.deleteOne({ _id: id });
  res.redirect("/");
};
const getEditUserPage = async (req, res) => {
  // const [rows, fields] = await connection.execute(
  //   "SELECT * FROM Users WHERE id=?",
  //   [req.params.id]
  // );

  // res.render("edit.ejs", { userEdit: rows });
  let userEdit = await User.findById(req.params.id).exec();
  console.log(">>> check userEdit", userEdit);
  res.render("edit.ejs", { userEdit });
};

const getSubmitEdit = async (req, res) => {
  const { email, name, city } = req.body;
  console.log(">>> chekc req.body", req.body);
  const id = req.params.id;
  try {
    await User.updateOne({ _id: id }, { email: email, name: name, city: city });
  } catch (error) {
    console.log(error);
  }
  // const [rows, fields] = await connection.execute(
  //   `UPDATE Users
  //   SET email = ?, name= ?,city = ?
  //   WHERE id = ?`,
  //   [email, name, city, id]
  // );
  res.redirect("/");
};
export {
  getSample,
  postCreateUser,
  getCreatePage,
  getAllUser,
  getDeleteUser,
  getEditUserPage,
  getSubmitEdit,
};
