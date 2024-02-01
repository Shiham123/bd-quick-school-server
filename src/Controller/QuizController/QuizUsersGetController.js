const { quizUserCollection } = require('../../DatabaseConfig/Db');

const quizUsersGetController = async (req, res) => {
  const query = req.query;
  const result = await quizUserCollection.find(query).toArray();
  res.status(202).send(result);
};

module.exports = quizUsersGetController;
