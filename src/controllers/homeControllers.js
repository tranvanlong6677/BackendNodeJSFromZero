import connection from "../config/database.js";
import User from "../models/Users.js";

const getHomePage = async (req, res) => {
  // const [rows, fields] = await connection.execute("SELECT * FROM Users");
  // let listUsers = rows;
  let listUsers = [];
  return res.render("home.ejs", { listUsers });
};

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

const getAllUser = async (req, res) => {
  // connection.query(`SELECT * FROM Users`, function (err, results, fields) {
  //   console.log(results);
  // });
  const [rows, fields] = await connection.execute("SELECT * FROM Users");
};

const getDeleteUser = async (req, res) => {
  let id = +req.params.id;
  const [rows, fields] = await connection.execute(
    "DELETE FROM Users WHERE id=?",
    [id]
  );
  res.send("Delete user success");
};
const getEditUserPage = async (req, res) => {
  const [rows, fields] = await connection.execute(
    "SELECT * FROM Users WHERE id=?",
    [req.params.id]
  );
  res.render("edit.ejs", { userEdit: rows });
};

const getSubmitEdit = async (req, res) => {
  const { email, name, city } = req.body;
  const id = +req.params.id;
  const [rows, fields] = await connection.execute(
    `UPDATE Users
    SET email = ?, name= ?,city = ?
    WHERE id = ?`,
    [email, name, city, id]
  );
  res.send("Edit user success");
};
export {
  getHomePage,
  getSample,
  postCreateUser,
  getCreatePage,
  getAllUser,
  getDeleteUser,
  getEditUserPage,
  getSubmitEdit,
};
