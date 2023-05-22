import connection from "../config/database.js";

const getHomePage = (req, res) => {
    return res.render("home.ejs");
    
};

const getSample = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  console.log(">>> check req body",req.body);
  res.send("create-user");
}
export { getHomePage, getSample,postCreateUser };
