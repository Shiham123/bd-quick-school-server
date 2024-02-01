const { quizUserCollection } = require('../../DatabaseConfig/Db');

const quizUsersGetController = async (req, res) => {
  try {
    const query = req.query;
    const result = await quizUserCollection.find(query).toArray();
    res.status(202).send(result);
  } catch (error) {
    console.log(error);
    res.status(405).send({ message: 'quiz user get method' });
  }
};

module.exports = quizUsersGetController;
