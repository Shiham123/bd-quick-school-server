const express = require('express');

const ActivityRouter = express.Router();


const devicePostControllers = require('../../Controller/ActivityController/devicePostControllers');
const deviceGetController = require('../../Controller/ActivityController/deviceGetController');
const deviceGetByEmailController = require('../../Controller/ActivityController/deviceGetByEmailController');
const deviceDeleteByIdController = require('../../Controller/ActivityController/deviceDeleteByIdController');


ActivityRouter.get('/device', deviceGetController)
ActivityRouter.get('/device/update/:email', deviceGetByEmailController)
ActivityRouter.post('/device', devicePostControllers)
ActivityRouter.delete('/device/:id', deviceDeleteByIdController)


module.exports = ActivityRouter;