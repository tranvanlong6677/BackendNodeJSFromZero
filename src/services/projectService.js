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
  } catch (error) {
    console.log(error);
    data = null;
  }
  return data;
};

const getProjectService = async (data) => {
  const { filter, limit,population } = aqp(data);
  console.log(population)
  const page = filter.page;
  delete filter.page;
  let skip = (page - 1) * limit;
  data = await Project.find(filter).populate(population).skip(skip).limit(limit).exec();

  return data;
};
export { postProjectService, getProjectService };
