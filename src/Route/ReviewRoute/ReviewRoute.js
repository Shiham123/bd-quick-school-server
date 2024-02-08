const express = require("express");
const ReviewGetController = require("../../Controller/ReviewController/ReviewController");
const ReviewPostController = require("../../Controller/ReviewController/ReviewPostController");
const ReviewPatchController = require("../../Controller/ReviewController/ReviewPatchController");
const adminReviewGetController = require("../../Controller/ReviewController/adminReviewGetController");
const ReviewDeleteController = require("../../Controller/ReviewController/ReviewDeleteController");
const ReviewRoute = express.Router();

//for review get
ReviewRoute.get("/reviewget", ReviewGetController);
ReviewRoute.get("/admin/reviews", adminReviewGetController);
ReviewRoute.post("/reviewpost", ReviewPostController);
ReviewRoute.patch("/update/status/:id", ReviewPatchController);
ReviewRoute.delete("/delete/:id", ReviewDeleteController);

module.exports = ReviewRoute;
