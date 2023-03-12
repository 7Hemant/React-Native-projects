const express = require("express");
const { protect } = require("../middlerware/ProtectRoute");
const {
  createTodo,
  readTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const TodoRoute = express.Router();
TodoRoute.post("/create", [protect], createTodo);
TodoRoute.get("/read", [protect], readTodo);
TodoRoute.put("/update", [protect], updateTodo);
TodoRoute.delete("/delete/:id", [protect], deleteTodo);

module.exports = TodoRoute;
