const express = require("express");
const paymentRoute = express.Router();
const PaymentConfirmController = require("../../Controller/PaymentController/PaymentConfirmController");
const paymentFaillController = require("../../Controller/PaymentController/paymentFaillController");

paymentRoute.post("/succsess/:tranID", PaymentConfirmController);
paymentRoute.post("/fail/:tranID", paymentFaillController);
module.exports = paymentRoute;
