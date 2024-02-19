const express = require('express');
const likeDislikeRouter = express.Router();
const {
  likePost,
  getLikePost,
  deleteOnlyOneLike,
  verifyLikeByEmailAndId,
  dislikePost,
  deleteOnlyOneDislike,
  getDislikePost,
  verifyDislikeByEmailAndId,
} = require('../../Controller/likeDislikeController.jsx/likeDislikeMethod');

likeDislikeRouter.post('/like', likePost);
likeDislikeRouter.delete('/delete/like/:id/:email', deleteOnlyOneLike);
likeDislikeRouter.get('/like/:id', getLikePost);
likeDislikeRouter.get('/like/verify/:email/:id', verifyLikeByEmailAndId);

likeDislikeRouter.post('/dislike', dislikePost);
likeDislikeRouter.delete('/dislike/delete/:id/:email', deleteOnlyOneDislike);
likeDislikeRouter.get('/dislike/:id', getDislikePost);
likeDislikeRouter.get('/dislike/verify/:email/:id', verifyDislikeByEmailAndId);

module.exports = likeDislikeRouter;
