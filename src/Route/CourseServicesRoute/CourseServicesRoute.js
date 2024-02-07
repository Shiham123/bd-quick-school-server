const express = require("express");
const ServicesPostController = require("../../Controller/ServicesController/ServicesPostController");
const VerifyToken = require("../../Middleware/Verifytoken");
const VerifyAdmin = require("../../Middleware/AdminVerify");
const servicesGetController = require("../../Controller/ServicesController/servicesGetController");
const servicesIdBasedGetController = require("../../Controller/ServicesController/servicesIdBasedGetController");
const ServicesRoute = express.Router();

//Get Routes
ServicesRoute.get("/", servicesGetController);

//Get Routes Id Based
ServicesRoute.get("/:id", servicesIdBasedGetController);

//Post ROute
ServicesRoute.post("/create", VerifyToken, VerifyAdmin, ServicesPostController);

module.exports = ServicesRoute;
