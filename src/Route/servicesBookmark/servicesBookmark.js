const express = require('express');
const servicesBookmarkRouter = express.Router();
const { servicesBookmarkPost } = require('../../Controller/UsersController/servicesBookmarkController');

servicesBookmarkRouter.post('/getAllCourses', servicesBookmarkPost);

module.exports = servicesBookmarkRouter;
