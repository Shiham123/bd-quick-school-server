const express = require('express');
const UsersRouter = express.Router();
const usersPostControllers = require('../../Controller/UsersController/userPostController');
const usersGetControllers = require('../../Controller/UsersController/usersGetController');
const usersGetByEmailController = require('../../Controller/UsersController/usersGetByEmailController');
const usersPutControllers = require('../../Controller/UsersController/usersPutControllers');
const usersPostJwtControllers = require('../../Controller/UsersController/usersPostJwtControllers');

UsersRouter.get('/users', usersGetControllers);
UsersRouter.get('/useremail/:email', usersGetByEmailController);
UsersRouter.post('/users', usersPostControllers);
UsersRouter.post('/jwt', usersPostJwtControllers);
UsersRouter.put('/useremail/:email', usersPutControllers);
//
module.exports = UsersRouter;
