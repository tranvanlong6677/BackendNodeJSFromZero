import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadSingleFile = async (objectFiles) => {
  //   sampleFile = req.files.image;

  let uploadPath = path.resolve(__dirname, "../public/img/upload");
  let extName = path.extname(objectFiles.name);
  let baseName = path.basename(objectFiles.name, extName);
  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;
  try {
    await objectFiles.mv(finalPath);
    return {
      status: "success",
      path: finalName,
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

const uploadMultipleFiles = async (filesArr) => {
  try {
    let uploadPath = path.resolve(__dirname, "../public/img/upload");
    let resultArr = [];
    let countImgUploadSucess = 0;
    for (let i = 0; i < filesArr.length; i++) {
      let extName = path.extname(filesArr[i].name);
      let baseName = path.basename(filesArr[i].name, extName);
      let finalName = `${baseName}-${Date.now()}${extName}`;
      let finalPath = `${uploadPath}/${finalName}`;
      try {
        await filesArr[i].mv(finalPath);
        resultArr.push({
          status: "success",
          path: finalName,
          fileName: filesArr[i].name,
          error: null,
        });
        countImgUploadSucess++;
      } catch (e) {
        console.log(e);
        resultArr.push({
          status: "failed",
          path: null,
          fileName: filesArr[i].name,
          error: JSON.stringify(err),
        });
      }
    }
    return { countImgUploadSucess: countImgUploadSucess, detail: resultArr };
  } catch (error) {
    console.log(error)
  }
};

export { uploadSingleFile, uploadMultipleFiles };
