const express = require('express');
const quizUsersGetController = require('../../Controller/QuizController/QuizUsersGetController');
const quizUsersPostController = require('../../Controller/QuizController/QuizUsersPostController');
const QuizRouter = express.Router();

QuizRouter.get('/quizUsers/:id/:email', quizUsersGetController);
QuizRouter.post('/quizUsers/:id/:email', quizUsersPostController);

module.exports = QuizRouter;
