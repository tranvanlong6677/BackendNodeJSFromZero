import connection from "../config/database.js";

const getHomePage = (req, res) => {
  connection.query(
    'SELECT * FROM `Users` WHERE `name` = "long tran" ',
    function (err, results, fields) {
      console.log("check results", results);
      // console.log("check fields",fields);
      res.send(JSON.stringify(results));
    }
  );
};

const getSample = (req, res) => {
  res.render("sample.ejs");
};
export { getHomePage, getSample };
