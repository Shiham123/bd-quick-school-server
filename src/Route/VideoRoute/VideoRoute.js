const express = require("express");
const videoPostController = require("../../Controller/VideoController/videoPostController");
const videoGetController = require("../../Controller/VideoController/videoGetController");
const videoRoute = express.Router();

//Post Route For video Upload
videoRoute.get("/video/:id", videoGetController);
videoRoute.post("/video/create", videoPostController);
//
module.exports = videoRoute;
