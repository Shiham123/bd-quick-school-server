const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const UsersRouter = require("./Route/UsersRoute/UsersRoute");
const paymentRoute = require("./Route/PaymentRoute/PaymentRoute");
const OrderRoute = require("./Route/OrderRoute/OrderRoute");

//middleWare
app.use(
  cors()
  //   cors({
  //     origin: [],
  //     credentials: true,
  //   }));
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//user Router Decleration Middleware
app.use("/api/v1", UsersRouter);

//Order Router Decleration Middleware
app.use("/api/v1", OrderRoute);

//Payment Route
app.use("/payment", paymentRoute);

// Error Router
app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong");
});

//Exports
module.exports = app;
