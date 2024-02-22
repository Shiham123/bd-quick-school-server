const express = require("express");
const ReviewPostController = require("../../Controller/ReviewController/ReviewPostController");
const ReviewPatchController = require("../../Controller/ReviewController/ReviewPatchController");
const adminReviewGetController = require("../../Controller/ReviewController/adminReviewGetController");
const ReviewDeleteController = require("../../Controller/ReviewController/ReviewDeleteController");
const adminAdvertiseReviewGetController = require("../../Controller/ReviewController/adminReviewAdvertiseGetController");
const adminAdvertisementReviewGetController = require("../../Controller/ReviewController/adminAdvertisementReviewGetController");
const adminReviewAdvertisePatchController = require("../../Controller/ReviewController/adminReviewAdvertisePatchController");
const adminReviewAdvertiseRemovePatchController = require("../../Controller/ReviewController/adminReviewAdvertiseRemovePatchController");
const ReviewRoute = express.Router();

//for review get
ReviewRoute.get("/admin/reviews", adminReviewGetController);
ReviewRoute.get("/admin/advertise/reviews", adminAdvertiseReviewGetController);
ReviewRoute.get("/admin/advertisement/reviews", adminAdvertisementReviewGetController);
ReviewRoute.post("/reviewpost", ReviewPostController);
ReviewRoute.patch("/update/status/:id", ReviewPatchController);
ReviewRoute.patch("/admin/advertise/reviews/:id", adminReviewAdvertisePatchController);
ReviewRoute.patch("/admin/advertiseRemove/reviews/:id", adminReviewAdvertiseRemovePatchController);
ReviewRoute.delete("/admin/reviews/:id", ReviewDeleteController);


module.exports = ReviewRoute;
