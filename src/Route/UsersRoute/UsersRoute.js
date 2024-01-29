const express = require("express");
const UsersRouter = express().router();
const usersPostControllers = require("../../Controller/UsersController/UserPostController");
const usersGetControllers = require("../../Controller/UsersController/UsersGetController");

UsersRouter.get("/", usersGetControllers);
UsersRouter.post("/create/", usersPostControllers);
//
module.exports = UsersRouter;
