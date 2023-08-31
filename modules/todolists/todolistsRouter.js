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

// Get Routers
todolistsRouter.get("/todolists", getToDoLists);
todolistsRouter.get("/todolist/:id", getToDoListById);
todolistsRouter.get("/todolist/search/:search", searchToDoList);
// todolistsRouter.get("/todolist/paginate/:page", paginateToDoList);

// Post Routers
todolistsRouter.post("/todolists", setToDoList);

// Delete Routers
todolistsRouter.delete("/todolist/:id", deleteToDoListById);

// Update Routers
todolistsRouter.put("/todolist/:id", updateToDoListById);

export default todolistsRouter;
