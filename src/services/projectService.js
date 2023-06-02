import Project from "../models/project.js";

const postProjectService = async (infoProject) => {
  let data = null;
  try {
    if (infoProject.type === "EMPTY_PROJECT") {
      data = await Project.create({ ...infoProject });
    }
    if (infoProject.type === "ADD_USER") {
      let project = await Project.findById(infoProject.projectId);
      console.log(">>> check project", project);
      console.log(">>> check infoProject", infoProject);

      for (let i = 0; i < infoProject.usersArr.length; i++) {
        // infoProject
        if (!project.usersInfor.includes(infoProject.usersArr[i])) {
          project.usersInfor.push(infoProject.usersArr[i]);
        }
      }
      let newProject = await project.save();
      console.log(">>> check new project", newProject);
      return newProject;
    }
  } catch (error) {
    console.log(error);
    data = null;
  }
  return data;
};
export { postProjectService };
