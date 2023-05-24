import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});
const User = mongoose.model("Users", userSchema);

export default User;
