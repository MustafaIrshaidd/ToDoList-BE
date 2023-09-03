import express from "express";
import todolist from "../../database/models/todolist.js";

const todolists = express.Router();

// GET Methods
export const getToDoLists = async (req, res) => {
  try {
    const todolists = await todolist.find();

    res.json(todolists);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};
export const getToDoListById = async (req, res) => {
  try {
    const _id = req.params.id;

    const obj = await todolist.findOne({ _id });

    if (!obj) {
      return res.status(404).json({ message: "ToDo list not found" });
    }

    res.json(obj);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};
export const searchToDoList = async (req, res) => {
  try {
    const searchTerm = req.params.search;
    const result = await todolist.find({
      title: { $regex: searchTerm, $options: "i" },
    });

    if (!result) {
      return res.status(404).json({ message: "no results" });
    }
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};
export const paginateToDoList = async (req, res) => {
  try {
    const pageNumber = req.params.page;
    const startIndex = (pageNumber - 1) * 10;

    const result = await todolist.find({}, null, {
      skip: startIndex,
      limit: 10,
    });

    if (!result) {
      return res.status(404).json({ message: "no results" });
    }

    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

// POST Methods
export const setToDoList = async (req, res) => {
  try {
    let obj = req.body;
    console.log(obj);
    await todolist.create(obj);
    res.send({ status: "success" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

// DELETE Methods
export const deleteToDoListById = async (req, res) => {
  try {
    const _id = req.params.id;

    const obj = await todolist.findOne({ _id });

    if (!obj) {
      return res.status(404).json({ message: "ToDo list not found" });
    }

    await todolist.deleteOne({ _id });

    res.send({ status: "success" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

// UPDATE Methods
export const updateToDoListById = async (req, res) => {
  try {
    const _id = req.params.id;
    const obj = await todolist.findOne({ _id });
    const newObj = req.body;

    if (!obj) {
      return res.status(404).json({ message: "ToDo list not found" });
    }

    await todolist.updateOne({ _id }, { $set: newObj });

    res.send({ status: "success" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default todolists;
