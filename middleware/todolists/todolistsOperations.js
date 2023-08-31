import express from "express";
import todolist from "../../database/models/todolist.js";

const todolists = express.Router();

export const getToDoLists = async (req, res) => {
  try {
    const todolists = await todolist.find();

    res.json(todolists);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const setToDoList = async (req, res) => {
  try {
    const latestDoc = await todolist.findOne().sort({ id: -1 });
    const newId = latestDoc ? latestDoc.id + 1 : 0;
    let obj = req.body;
    obj = { ...obj, id: newId };
    await todolist.create(obj);

    res.send({ status: "success" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getToDoListById = async (req, res) => {
  try {
    const id = req.params.id;

    const obj = await todolist.findOne({ id });

    if (!obj) {
      return res.status(404).json({ message: "ToDo list not found" });
    }

    res.json(obj);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteToDoListById = async (req, res) => {
  try {
    const id = req.params.id;

    const obj = await todolist.findOne({ id });

    if (!obj) {
      return res.status(404).json({ message: "ToDo list not found" });
    }

    await todolist.deleteOne({ id });

    res.send({ status: "success" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default todolists;
