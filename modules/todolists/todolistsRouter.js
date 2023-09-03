import express from "express";
import {
  deleteToDoListById,
  getToDoListById,
  getToDoLists,
  searchToDoList,
  setToDoList,
  updateToDoListById,
  paginateToDoList,
} from "./todolistsOperations.js";

const todolistsRouter = express.Router();

// GET Routers
todolistsRouter.get("/todolists", getToDoLists);
todolistsRouter.get("/todolists/:id", getToDoListById);
todolistsRouter.get("/todolists/search/:search", searchToDoList);
todolistsRouter.get("/todolists/paginate/:page", paginateToDoList);

// POST Routers
todolistsRouter.post("/todolists", setToDoList);

// DELETE Routers
todolistsRouter.delete("/todolists/:id", deleteToDoListById);

// UPDATE Routers
todolistsRouter.put("/todolists/:id", updateToDoListById);

export default todolistsRouter;
