const getHomePage = (req, res) => {
  res.send("Home page");
};

const getSample = (req, res) => {
  res.render("sample.ejs");
};
export { getHomePage,getSample };
