const express = require("express");
const FreeCourseJobController = require("../../Controller/ServicesController/FreeCourseJobController");
const FreeIdCourseJobController = require("../../Controller/ServicesController/FreeIdCourseJobController");

const FreeCourseJobRoute = express.Router();

//Get Routes
FreeCourseJobRoute.get("/getFreeJob", FreeCourseJobController);

//Get Routes
FreeCourseJobRoute.get("/getFreeJob/:id", FreeIdCourseJobController);





module.exports = FreeCourseJobRoute;