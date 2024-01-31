const { quizUserCollection } = require('../../DatabaseConfig/Db');

const quizUsersPostController = async (req, res) => {
  const user = req.body;
  console.log(user);
  const result = await quizUserCollection.insertOne(user);
  res.status(201).send(result);
};

module.exports = quizUsersPostController;
