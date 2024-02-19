const express = require('express');
const paymentRoute = express.Router();
const PaymentConfirmController = require('../../Controller/PaymentController/PaymentConfirmController');
const paymentFaillController = require('../../Controller/PaymentController/paymentFaillController');
const allPaymentController = require('./allPaymentController');
const userPaymentController = require('../../Controller/PaymentController/userPaymentController');

paymentRoute.get('/', allPaymentController);
paymentRoute.get('/user/:email', userPaymentController);
paymentRoute.post('/succsess/:tranID', PaymentConfirmController);
paymentRoute.post('/fail/:tranID', paymentFaillController);
module.exports = paymentRoute;
