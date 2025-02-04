import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
  task: String,
  completed: { type: Boolean, default: false },
});

const Task = mongoose.model("task", taskSchema);

export default Task;
