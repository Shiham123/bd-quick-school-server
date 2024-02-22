const express = require("express");

const AdmissionCategoryGetController = require("../../Controller/ServicesController/AdmissionCategoryGetController");
const JobIdBasedGetController = require("../../Controller/ServicesController/JobIdBasedGetController");

const AdmissionRoute = express.Router();

//Get Routes
AdmissionRoute.get("/getAdmission", AdmissionCategoryGetController);

//Get id route


AdmissionRoute.get("/getadmission/:id", JobIdBasedGetController);






module.exports = AdmissionRoute;