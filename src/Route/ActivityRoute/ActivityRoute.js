const express = require('express');

const ActivityRouter = express.Router();


const devicePostControllers = require('../../Controller/ActivityController/devicePostControllers');
const deviceGetController = require('../../Controller/ActivityController/deviceGetController');


ActivityRouter.get('/device', deviceGetController)
ActivityRouter.post('/device', devicePostControllers)


module.exports = ActivityRouter;