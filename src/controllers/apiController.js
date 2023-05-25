import User from "../models/Users.js";

const getUsersAPI = async (req, res) => {
  let listUsers = await User.find({});
  return res.status(200).json({
    EC:0,
    DT:listUsers,
    EM:"Get list users success"
  })
};

export {
    getUsersAPI,
}