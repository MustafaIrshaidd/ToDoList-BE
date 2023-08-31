import express from "express";
import dbConnection from "./database/connection.js";

import todolistsRouter from "./modules/todolists/todolistsRouter.js";

const app = express();

app.use(express.json());

app.use(todolistsRouter);

app.use((error, req, res, next) => {
  res.status(error.statusCode).send({
    status: false,
    message: error.message,
    stack: error.stack,
    statusCode: error.statusCode,
    errors: error.errors,
  });
});

app.listen(3000, () => {
  console.log("server Sarting at http://localhost:3000");
});

dbConnection();
