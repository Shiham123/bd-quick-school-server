const express = require('express');
const quizUsersGetController = require('../../Controller/QuizController/QuizUsersGetController');
const quizUsersPostController = require('../../Controller/QuizController/QuizUsersPostController');
const QuizRouter = express.Router();

QuizRouter.get('/quizUsers', quizUsersGetController);
QuizRouter.post('/quizUsers', quizUsersPostController);

module.exports = QuizRouter;
