const express = require("express");
const HelpPostController = require("../../Controller/HelpDeskControler/HealpPostControler");
const HealpDeaskGetController = require("../../Controller/HelpDeskControler/HealpDeskGetController");
const HealpDeaskGetIdController = require("../../Controller/HelpDeskControler/HealpGeatById");
const HelpDeskRoutes = express.Router();

HelpDeskRoutes.post("/HelpDeskRoutes", HelpPostController);
HelpDeskRoutes.get("/HelpDeskRoutes", HealpDeaskGetController);
HelpDeskRoutes.get("/HelpDeskRoutes/:id", HealpDeaskGetIdController);

module.exports = HelpDeskRoutes;
