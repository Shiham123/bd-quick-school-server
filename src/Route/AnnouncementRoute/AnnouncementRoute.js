const express = require("express");
const AnnouncementPostController = require("../../Controller/AnnouncementController/AnnouncementPostController");
const AnnouncementGetController = require("../../Controller/AnnouncementController/AnnouncementGetController");
const AnnouncementRoute = express.Router();


AnnouncementRoute.get("/admin/announcement", AnnouncementGetController)
AnnouncementRoute.post("/admin/announcement", AnnouncementPostController)


module.exports = AnnouncementRoute;
