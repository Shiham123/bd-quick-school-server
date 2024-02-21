const express = require('express');
const servicesBookmarkRouter = express.Router();
const {
  servicesBookmarkPost,
  deleteBookmark,
  isBookmarked,
  getServicesDataBasedOnId,
} = require('../../Controller/Bookmark/servicesBookmarkController');

servicesBookmarkRouter.post('/bookmarked', servicesBookmarkPost);
servicesBookmarkRouter.delete('/bookmark/:id/:email', deleteBookmark);
servicesBookmarkRouter.get('/isBookmark/:id/:email', isBookmarked);
servicesBookmarkRouter.get('/getBookmark/:email', getServicesDataBasedOnId);

module.exports = servicesBookmarkRouter;
