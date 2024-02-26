const express = require('express');
const NotificationRouter = express.Router();

const NotificationsPatchByTitleController = require('../../Controller/NotificationsController/NotificationsPatchByTitleController');
const NotificationsGetByTitleController = require('../../Controller/NotificationsController/NotificationsGetByTitleController');
const NotificationsGetByCourseIdController = require('../../Controller/NotificationsController/NotificationsGetByCourseIdController');




NotificationRouter.get('/notification', NotificationsGetByTitleController);
NotificationRouter.get('/notification/:courseId', NotificationsGetByCourseIdController);
NotificationRouter.patch('/notification', NotificationsPatchByTitleController);

module.exports = NotificationRouter;