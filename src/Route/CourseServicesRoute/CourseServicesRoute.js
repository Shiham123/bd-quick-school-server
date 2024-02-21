const express = require("express");
const ServicesPostController = require("../../Controller/ServicesController/ServicesPostController");
const VerifyToken = require("../../Middleware/Verifytoken");
const VerifyAdmin = require("../../Middleware/AdminVerify");
const servicesGetController = require("../../Controller/ServicesController/servicesGetController");
const servicesIdBasedGetController = require("../../Controller/ServicesController/servicesIdBasedGetController");
const ServicesDeleteController = require("../../Controller/ServicesController/ServicesDeleteController");
const ServicesUpdateController = require("../../Controller/ServicesController/ServicesUpdateController");
const servicesController = require("../../Controller/ServicesController/servicesController");
const ServicesRoute = express.Router();


//Get Routes
ServicesRoute.get("/", servicesController);

//Get Routes
ServicesRoute.get("/getService", servicesGetController);

//Get Routes Id Based
ServicesRoute.get("/:id", servicesIdBasedGetController);

//Post ROute
ServicesRoute.post("/create", VerifyToken, VerifyAdmin, ServicesPostController);

//services Delete route
ServicesRoute.put(
  "/course/update",
  VerifyToken,
  VerifyAdmin,
  ServicesUpdateController
);

//services Delete route
ServicesRoute.delete(
  "/delete/:id",
  VerifyToken,
  VerifyAdmin,
  ServicesDeleteController
);

module.exports = ServicesRoute;
