const express = require('express');
const UsersRouter = express.Router();

const usersGetControllers = require('../../Controller/UsersController/UsersGetController');
const usersGetByEmailController = require('../../Controller/UsersController/usersGetByEmailController');
const usersPostJwtControllers = require('../../Controller/UsersController/usersPostJwtControllers');
const usersPutControllers = require('../../Controller/UsersController/usersPutControllers');
const usersAdminGetByEmailController = require('../../Controller/UsersController/usersAdminGetByEmailController');
const UsersPostController = require('../../Controller/UsersController/usersPostControllers');
const VerifyToken = require('../../Middleware/Verifytoken');
const AdminVerify = require('../../Middleware/AdminVerify');

UsersRouter.get('/users', usersGetControllers);
UsersRouter.get('/useremail/:email', VerifyToken, usersGetByEmailController);
UsersRouter.get('/user/admin/:email', VerifyToken, AdminVerify, usersAdminGetByEmailController);
UsersRouter.post('/users', UsersPostController);
UsersRouter.post('/jwt', usersPostJwtControllers);
UsersRouter.put('/useremail/:email', usersPutControllers);

module.exports = UsersRouter;
