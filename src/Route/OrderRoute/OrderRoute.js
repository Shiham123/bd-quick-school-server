const express = require("express");
const OrderRoute = express.Router();
const OrderPostController = require("../../Controller/OrderController/OrderPostController");

//Routing Decleration
OrderRoute.post("/order", OrderPostController);

//
module.exports = OrderRoute;
