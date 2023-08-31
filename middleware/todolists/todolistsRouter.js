import express from 'express'
import { getToDoListById, getToDoLists, setToDoList } from './todolistsOperations.js';



const todolistsRouter = express.Router();


todolistsRouter.post('/settodolists',setToDoList)
todolistsRouter.get('/gettodolists',getToDoLists);
todolistsRouter.get('/gettodolist/:id',getToDoListById);



export default todolistsRouter;