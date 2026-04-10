import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

export default mongoose.model("Skill", skillSchema);