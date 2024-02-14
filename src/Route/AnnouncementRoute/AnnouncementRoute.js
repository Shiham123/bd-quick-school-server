const express = require("express");
const AnnouncementPostController = require("../../Controller/AnnouncementController/AnnouncementPostController");
const AnnouncementGetController = require("../../Controller/AnnouncementController/AnnouncementGetController");
const AnnouncementGetByIdController = require("../../Controller/AnnouncementController/AnnouncementGetByIdController");
const AnnouncementRoute = express.Router();


AnnouncementRoute.get("/admin/announcement", AnnouncementGetController)
AnnouncementRoute.get("/admin/announcements/:id", AnnouncementGetByIdController)
AnnouncementRoute.post("/admin/announcement", AnnouncementPostController)
// AnnouncementRoute.delete("/admin/announcement", )


module.exports = AnnouncementRoute;
