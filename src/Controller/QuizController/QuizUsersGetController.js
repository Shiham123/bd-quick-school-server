const { quizUserCollection } = require('../../DatabaseConfig/Db');

const quizUsersGetController = async (req, res) => {
  const result = await quizUserCollection.find().toArray();
  res.status(202).send(result);
};

module.exports = quizUsersGetController;
