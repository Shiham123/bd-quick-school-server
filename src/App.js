const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

//middleWare
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
const paymentRoute = require('./Route/PaymentRoute/PaymentRoute');
const OrderRoute = require('./Route/OrderRoute/OrderRoute');
const QuizRouter = require('./Route/QuizRoute/QuizRoute');

//Order Router declaration Middleware
app.use('/api/v1', OrderRoute);

//Payment Route
app.use('/payment', paymentRoute);

// quiz user route
app.use('/api/v2', QuizRouter);

// Error Router
app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong');
});

//Exports
module.exports = app;
