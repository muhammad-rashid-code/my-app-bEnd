import express from "express";
import morgan from "morgan";
import Users from "../models/User.js";
import sendResponse from "../helpers/sendResponse.js";

const userRoute = express();
userRoute.use(express.json());
userRoute.use(morgan("common"));

userRoute.post("/", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new Users({ email, password });
  await newUser.save();
  try {
    sendResponse(res, 201, false, newUser, "New User Added");
  } catch (e) {
    sendResponse(res, 400, true, null, "User not Added\n" + e);
  }
});

userRoute.post("/", async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
});

export default userRoute;
