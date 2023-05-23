import connection from "../config/database.js";

const getHomePage = async (req, res) => {
  const [rows, fields] = await connection.execute(
    "SELECT * FROM Users",
  );
  console.log(">>> check rows",rows);
  return res.render("home.ejs");
};

const getSample = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  console.log(">>> check req body", req.body);
  const { email, name, city } = req.body;

  // connection.query(
  //   `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
  //   [email, name, city],
  //   function (err, results, fields) {
  //     console.log(results);
  //     res.send("Create user success");
  //   }
  // );
  const [rows, fields] = await connection.execute(
    "INSERT INTO Users (email,name,city) VALUES (?,?,?)",
    [email, name, city]
  );
  
  res.send("Create user success");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getAllUser = async(req, res) => {
  // connection.query(`SELECT * FROM Users`, function (err, results, fields) {
  //   console.log(results);
  // });
  const [rows, fields] = await connection.execute(
    "SELECT * FROM Users",
  );
  console.log(">>> check rows",rows);
  console.log(">>> check fields",fields);
};
export { getHomePage, getSample, postCreateUser, getCreatePage, getAllUser };
