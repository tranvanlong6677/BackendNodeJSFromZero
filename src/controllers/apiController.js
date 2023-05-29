import User from "../models/Users.js";
import {
  uploadSingleFile,
  uploadMultipleFiles,
} from "../services/fileService.js";

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
  let result = await User.updateOne(
    { _id: id },
    { email: email, name: name, city: city }
  );
  return res.status(200).json({
    EC: 0,
    DT: result,
    EM: "Update user success",
  });
};

const deleteUserAPI = async (req, res) => {
  let id = req.params.id;
  let result = await User.deleteOne({ _id: id });

  return res.status(200).json({
    EC: 0,
    DT: result,
    EM: "Delete user success",
  });
};

const postUploadSingleFileApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return;
  }
  let result = await uploadSingleFile(req?.files?.image);
  return res.status(200).json({
    EC: 0,
    DT: result,
    EM: "Upload file success",
  });
};

const postUploadMultipleFilesApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return;
  }
  if (Array.isArray(req.files.image)) {
    let result = await uploadMultipleFiles(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  } else {
    return await postUploadSingleFileApi(req, res);
  }
};
export {
  getUsersAPI,
  postUserAPI,
  postUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesApi,
};
