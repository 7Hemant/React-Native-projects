const todo = require("../modules/TodoSchema");

exports.createTodo = async (req, res) => {
  const { todos } = req.body;
  console.log("----", req.body, "----");
  const createdTodo = await todo.create({
    todos,
    user: req.user._id,
  });
  res.json({
    status: "success",
    post: createdTodo,
  });
};
exports.readTodo = async (req, res) => {
  const todos = await todo.find({ user: req.user.id });
  res.status(200).json(todos);
};
exports.updateTodo = async (req, res) => {};
exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  console.log("dt", id);
  const dtodo = await todo.findById(id);
  console.log(dtodo);
  console.log(id);
  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  // // Make sure the logged in user matches the goal user
  // if (dtodo.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }
  await dtodo.remove();
  res.json({ id: dtodo._id });
};
