const express = require("express");

const AdmissionCategoryGetController = require("../../Controller/ServicesController/AdmissionCategoryGetController");

const AdmissionRoute = express.Router();

//Get Routes
AdmissionRoute.get("/getAdmission", AdmissionCategoryGetController);





module.exports = AdmissionRoute;