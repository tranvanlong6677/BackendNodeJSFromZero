import connection from "../config/database.js";

const getHomePage = (req, res) => {
    return res.render("home.ejs");
    
};

const getSample = (req, res) => {
  res.render("sample.ejs");
};
export { getHomePage, getSample };
