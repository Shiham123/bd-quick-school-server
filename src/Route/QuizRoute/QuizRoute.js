const express = require("express");
const QuizRouter = express.Router();
const quizUsersGetController = require("../../Controller/QuizController/QuizUsersGetController");
const quizUsersPostController = require("../../Controller/QuizController/QuizUsersPostController");
const quizAllUsersGetController = require("../../Controller/QuizController/quizAllUsersGetController");

QuizRouter.get("/quizusers", quizAllUsersGetController);
QuizRouter.get("/quizUsers/:id/:email", quizUsersGetController);
QuizRouter.post("/quizUsers/:id/:email", quizUsersPostController);

module.exports = QuizRouter;
