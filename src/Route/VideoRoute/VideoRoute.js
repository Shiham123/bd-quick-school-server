const express = require("express");
const videoPostController = require("../../Controller/VideoController/videoPostController");
const videoGetController = require("../../Controller/VideoController/videoGetController");
const videoPatchReactionController = require("../../Controller/VideoController/videoPatchReactionController");
const videoGetReactionController = require("../../Controller/VideoController/videoGetReactionController");
const videoRoute = express.Router();

//Post Route For video Upload
videoRoute.get("/video/:id", videoGetController);
videoRoute.get("/video/reaction/single", videoGetReactionController);
videoRoute.post("/video/create", videoPostController);
videoRoute.patch("/video/reaction", videoPatchReactionController);
//
module.exports = videoRoute;
