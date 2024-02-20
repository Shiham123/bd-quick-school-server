const express = require("express");
const HelpPostController = require("../../Controller/HelpDeskControler/HealpPostControler");
const HealpDeaskGetController = require("../../Controller/HelpDeskControler/HealpDeskGetController");
const HelpDeskRoutes = express.Router();

HelpDeskRoutes.post("/HelpDeskRoutes", HelpPostController);
HelpDeskRoutes.get("/HelpDeskRoutes", HealpDeaskGetController);

module.exports = HelpDeskRoutes;
