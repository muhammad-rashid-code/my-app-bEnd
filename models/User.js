import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // userName: { type: String, required: true },
  // verified: { type: Boolean, default: false, required: true },
});

const User = mongoose.model("users", userSchema);
export default User;
