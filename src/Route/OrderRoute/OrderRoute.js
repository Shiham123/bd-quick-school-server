const express = require("express");
const OrderRoute = express.Router();
const OrderPostController = require("../../Controller/OrderController/OrderPostController");
const OrderGetController = require("../../Controller/OrderController/OrderGetController");

//Routing Decleration
OrderRoute.get("/user/order", OrderGetController);
OrderRoute.post("/order", OrderPostController);

//
module.exports = OrderRoute;
