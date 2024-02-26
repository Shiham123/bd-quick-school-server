const express = require('express');
const NotificationRouter = express.Router();

const NotificationsPatchByTitleController = require('../../Controller/NotificationsController/NotificationsPatchByTitleController');
const NotificationsGetByTitleController = require('../../Controller/NotificationsController/NotificationsGetByTitleController');




NotificationRouter.get('/notification', NotificationsGetByTitleController);
NotificationRouter.patch('/notification', NotificationsPatchByTitleController);

module.exports = NotificationRouter;