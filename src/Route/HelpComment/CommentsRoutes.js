const express = require("express");
const CommentPost = require("../../Controller/CommentsController/CommentPost");
const CommentGet = require("../../Controller/CommentsController/Commnetsge");

const CommentRoutes = express.Router();

CommentRoutes.post("/CommentRoutes", CommentPost);
CommentRoutes.get("/CommentRoutes/:id", CommentGet);

module.exports = CommentRoutes;
