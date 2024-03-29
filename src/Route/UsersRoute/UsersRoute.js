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
const usersGetByIdController = require('../../Controller/UsersController/usersGetByIdController');
const usersDeleteByIdController = require('../../Controller/UsersController/usersDeleteByIdController');
const usersStudentGetByEmailController = require('../../Controller/UsersController/usersStudentGetByEmailController');
const StudentVerify = require('../../Middleware/StudentVerify');
const UsersBannedPatchByIdController = require('../../Controller/UsersController/UsersBannedPatchByIdController');

UsersRouter.get('/users', usersGetControllers);
UsersRouter.get('/useremail/:email', VerifyToken, usersGetByEmailController);
UsersRouter.get('/userid/:id', usersGetByIdController);
UsersRouter.get('/user/admin/:email', VerifyToken, AdminVerify, usersAdminGetByEmailController);
UsersRouter.get('/user/student/:email', VerifyToken, StudentVerify, usersStudentGetByEmailController);
UsersRouter.post('/users', UsersPostController);
UsersRouter.post('/jwt', usersPostJwtControllers);
UsersRouter.put('/useremail/:email', usersPutControllers);
UsersRouter.patch('/userid/banned/:id', UsersBannedPatchByIdController);
UsersRouter.delete('/userid/:id', usersDeleteByIdController);

module.exports = UsersRouter;
