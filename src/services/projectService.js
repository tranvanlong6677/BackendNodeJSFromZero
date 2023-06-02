import Project from "../models/project.js";

const postProjectService = async (infoProject) => {
  let data = null;
  try {
    if (infoProject.type === "EMPTY_PROJECT") {
      data = await Project.create({ ...infoProject });
    }
  } catch (error) {
    console.log(error);
    data = null;
  }
  return data;
};
export { postProjectService };
