const express = require("express");
const UsersRouter = express.Router();
const usersPostControllers = require("../../Controller/UsersController/userPostController");
const usersGetControllers = require("../../Controller/UsersController/usersGetController");
const usersGetByEmailController = require("../../Controller/UsersController/usersGetByEmailController");
const usersAdminGetByEmailController = require("../../Controller/UsersController/usersAdminGetByEmailController")
const usersPutControllers = require("../../Controller/UsersController/usersPutControllers");
const usersPostJwtControllers = require("../../Controller/UsersController/usersPostJwtControllers");
const verifyToken = require("../../Middleware/Verifytoken");

UsersRouter.get("/users", usersGetControllers);
UsersRouter.get("/useremail/:email", usersGetByEmailController);
UsersRouter.get("/user/admin/:email", verifyToken, usersAdminGetByEmailController)
UsersRouter.post("/users", usersPostControllers);
UsersRouter.post("/jwt", usersPostJwtControllers);
UsersRouter.put("/useremail/:email", usersPutControllers);
//
module.exports = UsersRouter;
