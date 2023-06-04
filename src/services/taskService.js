import Task from "../models/task.js";
import aqp from "api-query-params";
const getTasksService = async (queryString) => {
  try {
    let data = null;
    let limit = +queryString.limit;
    let page = +queryString.page;

    if (limit && page) {
      let skip = (page - 1) * limit;
      const { filter } = aqp(queryString);
      delete filter.page;
      data = await Task.find(filter).skip(skip).limit(limit).exec();
    } else {
      data = await Task.find({});
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
const createTaskService = async (dataTask) => {
  let data = null;
  try {
    data = await Task.create({ ...dataTask });
  } catch (error) {
    console.log(error);
    data = null;
  }
  return data;
};
const updateTaskService = async (dataUpdate) => {
  let data = null;
  try {
    data = await Task.updateOne({ _id: dataUpdate.id }, { ...dataUpdate });
  } catch (error) {
    console.log(error);
    data = null;
  }
  return data;
};
const deleteTaskService = async (id) => {
  let data = null;
  try {
    data = await Task.delete({ _id: { $in: id } });
  } catch (error) {
    data = null;
    console.log(error);
  }
  return data;
};

export {
  getTasksService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
