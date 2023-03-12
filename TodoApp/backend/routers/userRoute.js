const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const AuthRoute = express.Router();

AuthRoute.post("/register", registerUser);
AuthRoute.post("/login", loginUser);

module.exports = AuthRoute;
