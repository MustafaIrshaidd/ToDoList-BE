import express from 'express'
import { deleteToDoListById, getToDoListById, getToDoLists, setToDoList } from './todolistsOperations.js';



const todolistsRouter = express.Router();


todolistsRouter.post('/settodolists',setToDoList)
todolistsRouter.get('/gettodolists',getToDoLists);
todolistsRouter.get('/gettodolist/:id',getToDoListById);
todolistsRouter.delete('/deletetodolist/:id',deleteToDoListById)



export default todolistsRouter;