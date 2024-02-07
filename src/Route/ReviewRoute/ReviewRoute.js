const express = require('express');
const ReviewGetController = require('../../Controller/ReviewController/ReviewController');
const ReviewPostController = require('../../Controller/ReviewController/ReviewPostController');
const ReviewRoute = express.Router();

//for review get 
ReviewRoute.get('/reviewget',ReviewGetController);
ReviewRoute.post('/reviewpost', ReviewPostController);

module.exports = ReviewRoute


