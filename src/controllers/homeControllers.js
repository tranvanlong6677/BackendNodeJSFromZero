import connection from "../config/database.js";

const getHomePage = (req, res) => {
    return res.render("home.ejs");
    
};

const getSample = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  console.log(">>> check req body",req.body);
  const { email, name, city } = req.body;
  connection.query(
    `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,[email, name, city],
    function(err, results, fields) {
      console.log(results); 
      res.send("Create user success");
    }
  );
}
export { getHomePage, getSample,postCreateUser };
