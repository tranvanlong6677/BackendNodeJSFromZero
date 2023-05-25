import User from "../models/Users.js";

const getUsersAPI = async (req, res) => {
  let listUsers = await User.find({});
  return res.status(200).json({
    EC:0,
    DT:listUsers,
    EM:"Get list users success"
  })
};
const getCreatePage = (req, res) => {
    res.render("create.ejs");
  };
const postUserAPI = async (req, res) => {
    const { email, name, city } = req.body;
    let results = await User.create({ email, name, city });
    return res.status(200).json({
      EC:0,
      DT:results,
      EM:"Get list users success"
    })
  };

export {
    getUsersAPI,postUserAPI
}