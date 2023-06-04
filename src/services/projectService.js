import Project from "../models/project.js";
import aqp from "api-query-params";

const postProjectService = async (infoProject) => {
  let data = null;
  try {
    if (infoProject.type === "EMPTY_PROJECT") {
      data = await Project.create({ ...infoProject });
    }
    if (infoProject.type === "ADD_USER") {
      let project = await Project.findById(infoProject.projectId);

      for (let i = 0; i < infoProject.usersArr.length; i++) {
        if (!project.usersInfor.includes(infoProject.usersArr[i])) {
          project.usersInfor.push(infoProject.usersArr[i]);
        }
      }
      let newProject = await project.save();
      return newProject;
    }
    if (infoProject.type === "REMOVE_USERS") {
      console.log(infoProject);
      let project = await Project.findOne({ _id: infoProject.projectId });
      console.log("project ", project);
      infoProject.usersArr.map((item) => {
        project.usersInfor.pull(item);
      });
      project.save();
      return project;
    }
  } catch (error) {
    console.log(error);
    data = null;
  }
  return data;
};

const getProjectService = async (data) => {
  const { filter, limit, population } = aqp(data);
  const page = filter.page;
  delete filter.page;
  let skip = (page - 1) * limit;
  data = await Project.find(filter)
    .populate(population)
    .skip(skip)
    .limit(limit)
    .exec();

  return data;
};
const deleteProjectService = async (id) => {
  let data = null;
  try {
    // data = await Project.deleteOne({ _id: id });
    data = await Project.delete({ _id: { $in: id } });
    console.log(">>> check soft", data);
  } catch (error) {
    console.log(error);
    data = null;
  }
  return data;
};

const updateProjectService = async (id, name, endDate, description) => {
  let data = await Project.updateOne(
    { _id: id },
    { name, endDate, description }
  );
  return data;
};
export {
  postProjectService,
  getProjectService,
  deleteProjectService,
  updateProjectService,
};
