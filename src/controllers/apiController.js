import User from "../models/Users.js";

const getUsersAPI = async (req, res) => {
  let listUsers = await User.find({});
  return res.status(200).json({
    EC: 0,
    DT: listUsers,
    EM: "Get list users success",
  });
};

const postUserAPI = async (req, res) => {
  const { email, name, city } = req.body;
  let results = await User.create({ email, name, city });
  return res.status(200).json({
    EC: 0,
    DT: results,
    EM: "Create user success",
  });
};
const postUpdateUserAPI = async (req, res) => {
  const { email, name, city } = req.body;
  const id = req.params.id;
  let result =  await User.updateOne({ _id: id }, { email: email, name: name, city: city });
  return res.status(200).json({
    EC: 0,
    DT: result,
    EM: "Update user success",
  });
};
export { getUsersAPI, postUserAPI, postUpdateUserAPI };
