const { quizUserCollection } = require('../../DatabaseConfig/Db');

const quizUsersPostController = async (req, res) => {
  const email = req.params.email;
  const data = req.body;
  const result = await quizUserCollection.insertOne({ email: email, ...data });
  res.status(202).send(result);
};

module.exports = quizUsersPostController;
