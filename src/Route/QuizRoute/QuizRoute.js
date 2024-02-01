const express = require('express');
const quizUsersGetController = require('../../Controller/QuizController/QuizUsersGetController');
const quizUsersPostController = require('../../Controller/QuizController/QuizUsersPostController');
const QuizRouter = express.Router();

QuizRouter.get('/quizUsers/:email', quizUsersGetController);
QuizRouter.post('/quizUsers/:email', quizUsersPostController);

module.exports = QuizRouter;
