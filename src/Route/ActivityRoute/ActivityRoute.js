const express = require('express');

const ActivityRouter = express.Router();


const devicePostControllers = require('../../Controller/ActivityController/devicePostControllers');


ActivityRouter.post('/device', devicePostControllers)


module.exports = ActivityRouter;