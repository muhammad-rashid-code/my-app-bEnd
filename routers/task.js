import express from "express";
import morgan from "morgan";
import Task from "../models/Tasks.js";
import sendResponse from "../helpers/sendResponse.js";

const taskRouters = express();
taskRouters.use(express.json());
taskRouters.use(morgan("common"));

taskRouters.post("/", async (req, res) => {
  const { task } = req.body;
  const newTask = new Task({ task });

  try {
    newTask = await newTask.save();
    sendResponse(res, 201, false, newTask, "task added");
  } catch (e) {
    sendResponse(res, 201, true, newTask, "task added" + e);
  }
});

taskRouters.get("/", async (req, res) => {
  const allTasks = await Task.find({});

  try {
    sendResponse(res, 200, false, allTasks, "task Found");
  } catch (e) {
    sendResponse(res, 400, true, allTasks, "task not Found" + e);
  }
});

taskRouters.get("/:id", async (req, res) => {
  const { id } = req.params;
  const allTasks = await Task.findById(id);

  try {
    sendResponse(res, 200, false, allTasks, "task Found");
  } catch (e) {
    sendResponse(res, 400, true, allTasks, "task not Found" + e);
  }
});
export default taskRouters;
