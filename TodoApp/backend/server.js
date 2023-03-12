const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const AuthRoute = require("./routers/userRoute");
const TodoRoute = require("./routers/TodoRoute");
const ConnectedDB = require("./db/db");
const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use("/api/auth", AuthRoute);
app.use("/api/todo", TodoRoute);

ConnectedDB().then(() => {
  app.listen(4000, () => {
    console.log("server is running");
  });
});
