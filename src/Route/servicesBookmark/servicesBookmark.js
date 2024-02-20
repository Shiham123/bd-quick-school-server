const express = require('express');
const servicesBookmarkRouter = express.Router();
const {
  servicesBookmarkPost,
  deleteBookmark,
  isBookmarked,
} = require('../../Controller/UsersController/servicesBookmarkController');

servicesBookmarkRouter.post('/bookmarked', servicesBookmarkPost);
servicesBookmarkRouter.delete('/bookmark/:id/:email', deleteBookmark);
servicesBookmarkRouter.get('/isBookmark/:id/:email', isBookmarked);

module.exports = servicesBookmarkRouter;
