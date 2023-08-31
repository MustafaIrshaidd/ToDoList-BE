import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/todolist")
    .then((result) => {
      console.log("DataBase Connected successfully");
    })
    .catch((err) => {
      console.log("Failed to connect to database");
    });
};

export default dbConnection;
