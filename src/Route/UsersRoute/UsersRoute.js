const express = require('express');
const usersRoute = express.Router();

// get method
const usersGetControllers = require('../../Controller/UsersController/usersGetController');

// get method
usersRoute.get('/users', usersGetControllers);

module.exports = usersRoute;
