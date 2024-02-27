const express = require('express');
const NotificationRouter = express.Router();

const NotificationsPatchByTitleController = require('../../Controller/NotificationsController/NotificationsPatchByTitleController');
const NotificationsGetController = require('../../Controller/NotificationsController/NotificationsGetByTitleController');
const NotificationsGetByCourseIdController = require('../../Controller/NotificationsController/NotificationsGetByCourseIdController');





NotificationRouter.get('/notification', NotificationsGetController);
NotificationRouter.get('/notifications/:courseId', NotificationsGetByCourseIdController);
NotificationRouter.patch('/notification', NotificationsPatchByTitleController);

module.exports = NotificationRouter;