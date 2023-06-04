import {
  getTasksService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} from "../services/taskService.js";

const getTasks = async (req, res) => {
  console.log(">>> rq.query", req.query);
  let data = await getTasksService(req.query);
  if (data) {
    return res.status(200).json({ EC: 0, data: data, status: "success" });
  } else {
    return res.status(500).json({ EC: -1, data: data, status: "failed" });
  }
};
const createTask = async (req, res) => {
  let data = await createTaskService(req.body);
  if (data) {
    return res.status(200).json({ EC: 0, data: data, status: "success" });
  } else {
    return res.status(500).json({ EC: -1, data: data, status: "failed" });
  }
};
const updateTask = async (req, res) => {
  console.log("check req.body update", req.body);
  let dataUpdate = req.body;
  dataUpdate.id = req.params.id;
  let data = await updateTaskService(req.body);
  if (data) {
    return res.status(200).json({ EC: 0, data: data, status: "success" });
  } else {
    return res.status(500).json({ EC: -1, data: data, status: "failed" });
  }
};
const deleteTask = async (req, res) => {
  let data = await deleteTaskService(req.params.id);
  if (data) {
    return res.status(200).json({ EC: 0, data: data, status: "success" });
  } else {
    return res.status(500).json({ EC: -1, data: data, status: "failed" });
  }
};

export { getTasks, createTask, updateTask, deleteTask };
