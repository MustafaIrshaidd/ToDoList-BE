import mongoose from "mongoose";
const { Schema } = mongoose;

const todolist = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: String,
    cardImg: String,
    cardIcon: String,
    cardDate: String,
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
