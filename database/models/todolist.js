import mongoose from "mongoose";

const { Schema } = mongoose;

const todolist = new Schema(
  {
    title: { type: String,  default: "Untitled" },
    cardImg: { type: String, default: "" },
    cardIcon: { type: String, default: "" },
    cardDate: { type: String, default: "" },
    tasks: {
      todo: Array,
      inprogress: Array,
      done: Array,
    },
    cardStatus: Number,
  },
  { timestamps: true }
);

export default mongoose.model("todolists", todolist);
