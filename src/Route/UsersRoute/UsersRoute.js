const express = require('express');
const UsersRouter = express.Router();

const usersGetControllers = require('../../Controller/UsersController/UsersGetController');
const usersGetByEmailController = require('../../Controller/UsersController/usersGetByEmailController');
const usersPostJwtControllers = require('../../Controller/UsersController/usersPostJwtControllers');
const usersPutControllers = require('../../Controller/UsersController/usersPutControllers');
const VerifyToken = require('../../Middleware/Verifytoken');
const usersAdminGetByEmailController = require('../../Controller/UsersController/usersAdminGetByEmailController');
const UsersPostController = require('../../Controller/UsersController/usersPostControllers');

UsersRouter.get('/users', usersGetControllers);
UsersRouter.get('/useremail/:email', usersGetByEmailController);
UsersRouter.get('/user/admin/:email', usersAdminGetByEmailController);
UsersRouter.post('/users', UsersPostController);
UsersRouter.post('/jwt', usersPostJwtControllers);
UsersRouter.put('/useremail/:email', usersPutControllers);
//
module.exports = UsersRouter;
