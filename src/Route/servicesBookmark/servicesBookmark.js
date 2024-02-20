const express = require('express');
const servicesBookmarkRouter = express.Router();
const { servicesBookmarkPost, deleteBookmark } = require('../../Controller/UsersController/servicesBookmarkController');

servicesBookmarkRouter.post('/bookmarked', servicesBookmarkPost);
servicesBookmarkRouter.delete('/bookmark/:id/:email', deleteBookmark);

module.exports = servicesBookmarkRouter;
