import express from "express";
import {
  deleteToDoListById,
  getToDoListById,
  getToDoLists,
  searchToDoList,
  setToDoList,
  updateToDoListById,
} from "./todolistsOperations.js";

const todolistsRouter = express.Router();

// Get Methods
todolistsRouter.get("/todolists", getToDoLists);
todolistsRouter.get("/todolist/:id", getToDoListById);
todolistsRouter.get("/todolist/search/:search", searchToDoList);
// todolistsRouter.get("/todolist/paginate/:page", paginateToDoList);

// Post Methods
todolistsRouter.post("/todolists", setToDoList);

// Delete Methods
todolistsRouter.delete("/todolist/:id", deleteToDoListById);

// Update Methods
todolistsRouter.put("/todolist/:id", updateToDoListById);

export default todolistsRouter;
