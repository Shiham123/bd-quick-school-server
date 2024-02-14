const express = require('express');
const likeDislikeRouter = express.Router();
const {
  likePost,
  dislikePost,
  getLikePost,
  deleteOnlyOneLike,
} = require('../../Controller/likeDislikeController.jsx/likeDislikeMethod');

likeDislikeRouter.post('/like', likePost);
likeDislikeRouter.delete('/delete/like/:id/:email', deleteOnlyOneLike);
likeDislikeRouter.post('/dislike', dislikePost);
likeDislikeRouter.get('/like/:id', getLikePost);

module.exports = likeDislikeRouter;
