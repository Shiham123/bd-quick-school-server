const express = require("express");
const JobCategoryGetController = require("../../Controller/ServicesController/JobCategoryGetController");
const JobIdBasedGetController = require("../../Controller/ServicesController/JobIdBasedGetController");

const JobRoute = express.Router();

//Get Routes
JobRoute.get("/getJob", JobCategoryGetController);

//Get id route


JobRoute.get("/getJob/:id", JobIdBasedGetController);





module.exports = JobRoute;
