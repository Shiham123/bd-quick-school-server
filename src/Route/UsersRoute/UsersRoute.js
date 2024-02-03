const express = require('express');
const UsersRouter = express.Router();
const usersPostControllers = require('../../Controller/UsersController/userPostController');
const usersGetControllers = require('../../Controller/UsersController/usersGetController');
const usersGetByEmailController = require('../../Controller/UsersController/usersGetByEmailController');
const usersPutControllers = require('../../Controller/UsersController/usersPutControllers');
const usersPostJwtControllers = require('../../Controller/UsersController/usersPostJwtControllers');
const VerifyToken = require('../../Middleware/Verifytoken');
const VerifyAdmin = require('../../Middleware/AdminVerify');
const usersAdminGetByEmailController = require('../../Controller/UsersController/usersAdminGetByEmailController');

UsersRouter.get('/users', usersGetControllers);
UsersRouter.get('/useremail/:email', VerifyToken, usersGetByEmailController);
UsersRouter.get('/user/admin/:email', VerifyToken, VerifyAdmin, usersAdminGetByEmailController);
UsersRouter.post('/users', usersPostControllers);
UsersRouter.post('/jwt', usersPostJwtControllers);
UsersRouter.put('/useremail/:email', usersPutControllers);
//
module.exports = UsersRouter;
