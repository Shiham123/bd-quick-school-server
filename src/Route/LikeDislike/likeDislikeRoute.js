const express = require('express');
const likeDislikeRouter = express.Router();
const {
  likePost,
  getLikePost,
  deleteOnlyOneLike,
  verifyLikeByEmailAndId,
} = require('../../Controller/likeDislikeController.jsx/likeDislikeMethod');

likeDislikeRouter.post('/like', likePost);
likeDislikeRouter.delete('/delete/like/:id/:email', deleteOnlyOneLike);
likeDislikeRouter.get('/like/:id', getLikePost);
likeDislikeRouter.get('/like/verify/:email/:id', verifyLikeByEmailAndId);

module.exports = likeDislikeRouter;
