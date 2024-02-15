const express = require("express");
const AnnouncementPostController = require("../../Controller/AnnouncementController/AnnouncementPostController");
const AnnouncementGetController = require("../../Controller/AnnouncementController/AnnouncementGetController");
const AnnouncementGetByIdController = require("../../Controller/AnnouncementController/AnnouncementGetByIdController");
const AnnouncementDeleteByIdController = require("../../Controller/AnnouncementController/AnnouncementDeleteByIdController");
const AnnouncementPutByIdController = require("../../Controller/AnnouncementController/AnnouncementPutByIdController");
const AnnouncementRoute = express.Router();




AnnouncementRoute.get("/admin/announcement", AnnouncementGetController)
AnnouncementRoute.get("/admin/announcements/:id", AnnouncementGetByIdController)
AnnouncementRoute.post("/admin/announcement", AnnouncementPostController)
AnnouncementRoute.put("/admin/announcements/:id", AnnouncementPutByIdController)
AnnouncementRoute.delete("/admin/announcements/:id", AnnouncementDeleteByIdController)


module.exports = AnnouncementRoute;
