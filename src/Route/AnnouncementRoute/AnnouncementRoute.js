const express = require("express");
const AnnouncementPostController = require("../../Controller/AnnouncementController/AnnouncementPostController");
const AnnouncementRoute = express.Router();


AnnouncementRoute.post("/admin/announcement", AnnouncementPostController)


module.exports = AnnouncementRoute;
