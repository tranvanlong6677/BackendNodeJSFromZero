import {
  postProjectService,
  getProjectService,
  deleteProjectService,
  updateProjectService,
} from "../services/projectService.js";

const postProject = async (req, res) => {
  let data = await postProjectService(req.body);
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
  return res.status(200).json({
    EC: 0,
    data: data,
    status: "success",
  });
};
const deleteProject = async (req, res) => {
  let id = req.params.id;
  let data = await deleteProjectService(id);
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
const updateProject = async (req, res) => {
  let id = req.params.id;
  let name = req.body.name;
  let endDate = req.body.endDate;
  let description = req.body.description;
  let data = await updateProjectService(id, name, endDate, description);
  if(data){
    return res.status(200).json({
      EC: 0,
      data,
      status: "success",
    });
  }else {
    return res.status(500).json({
      EC: -1,
      data,
      status: "failed",
    });
  }
};

export { postProject, getProject, deleteProject, updateProject };
