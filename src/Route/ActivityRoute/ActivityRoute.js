const express = require('express');

const ActivityRouter = express.Router();


const devicePostControllers = require('../../Controller/ActivityController/devicePostControllers');
const deviceGetController = require('../../Controller/ActivityController/deviceGetController');
const deviceGetByEmailController = require('../../Controller/ActivityController/deviceGetByEmailController');


ActivityRouter.get('/device', deviceGetController)
ActivityRouter.get('/device/update/:email', deviceGetByEmailController)
ActivityRouter.post('/device', devicePostControllers)


module.exports = ActivityRouter;