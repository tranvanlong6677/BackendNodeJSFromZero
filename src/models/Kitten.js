import mongoose from "mongoose";

const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model("TestLT", kittySchema);

export default Kitten;

