const express = require("express");
const JobCategoryGetController = require("../../Controller/ServicesController/JobCategoryGetController");

const JobRoute = express.Router();

//Get Routes
JobRoute.get("/getJob", JobCategoryGetController);





module.exports = JobRoute;
