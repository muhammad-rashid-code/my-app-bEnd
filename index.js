import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import taskRouters from "./routers/task.js";
import userRoute from "./routers/users.js"; 

const app = express();
const port = process.env.PORT;
const db = process.env.MONGO_URI;

app.use(express.json());
app.use(morgan("common"));
app.use(cors("*"));

app.use("/tasks", taskRouters);
app.use("/users", userRoute);

mongoose
  .connect(db)
  .then(() => {
    console.log(" ===== db conn =====");
  })
  .catch((e) => {
    console.log(console.log(" ===== db fail =====\n" + e));
  });

app.listen(port, () => {
  console.log("Server is Runnig at PORT", port);
});
