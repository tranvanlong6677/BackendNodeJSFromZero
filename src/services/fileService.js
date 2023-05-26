import fileUpload from "express-fileupload";
// import

const uploadSingleFile = async (objectFiles) => {
  //   sampleFile = req.files.image;

  let uploadPath = "abc/"+ objectFiles.name;

  try {
    await objectFiles.mv(uploadPath);
    return {
      status: "success",
      path: "",
      error: null,
    };
  } catch (err) {
    console.log(err);
    return {
      status: "failed",
      path: "",
      error: JSON.stringify(err),
    };
  }
};

const uploadMultipleFiles = () => {};

export { uploadSingleFile, uploadMultipleFiles };
