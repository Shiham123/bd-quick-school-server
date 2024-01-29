const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const UsersRouter = require("./Route/UsersRoute/UsersRoute");

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

//Route Decleration Part Start

//user Router Decleration Middleware
app.use("/api/v1/users", UsersRouter);

//Route Decleration Part end

//Error Router
app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong");
});

//Exports
module.exports = app;
