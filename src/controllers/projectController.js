import {
  postProjectService,
  getProjectService,
} from "../services/projectService.js";

const postProject = async (req, res) => {
  let data = await postProjectService(req.body);
  console.log(">>> check data", data);
  if (data) {
    return res.status(200).json({
      EC: 0,
      data,
      status: "success",
    });
  } else {
    return res.status(500).json({
      EC: -1,
      data,
      status: "failed",
    });
  }
};

const getProject = async (req, res) => {
  let data = await getProjectService(req.query);
  console.log(">>> check params", req.query);
  return res.status(200).json({
    EC: 0,
    data: data,
    status: "success",
  });
};

export { postProject, getProject };
