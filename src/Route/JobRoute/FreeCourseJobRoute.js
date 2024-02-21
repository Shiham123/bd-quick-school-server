const express = require("express");
const FreeCourseJobController = require("../../Controller/ServicesController/FreeCourseJobController");

const FreeCourseJobRoute = express.Router();

//Get Routes
FreeCourseJobRoute.get("/getFreeJob", FreeCourseJobController);





module.exports = FreeCourseJobRoute;