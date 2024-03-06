const express = require('express');
const OrderRoute = express.Router();
const OrderPostController = require('../../Controller/OrderController/OrderPostController');
const OrderGetController = require('../../Controller/OrderController/OrderGetController');
const OrderGetByEmailController = require('../../Controller/OrderController/OrderGetByEmailController');

//Routing Decleration
OrderRoute.get('/user/order', OrderGetController);
OrderRoute.get('/user/order/payment/history/:email', OrderGetByEmailController);
OrderRoute.post('/order', OrderPostController);

//
module.exports = OrderRoute;
