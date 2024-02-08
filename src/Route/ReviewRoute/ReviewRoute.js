const express = require("express");
const ReviewGetController = require("../../Controller/ReviewController/ReviewController");
const ReviewPostController = require("../../Controller/ReviewController/ReviewPostController");
const ReviewPatchController = require("../../Controller/ReviewController/ReviewPatchController");
const ReviewRoute = express.Router();

//for review get
ReviewRoute.get("/reviewget", ReviewGetController);
ReviewRoute.post("/reviewpost", ReviewPostController);
ReviewRoute.patch("/update/status/:id", ReviewPatchController);

module.exports = ReviewRoute;
