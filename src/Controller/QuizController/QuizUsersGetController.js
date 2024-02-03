const { quizUserCollection } = require('../../DatabaseConfig/Db');

const quizUsersGetController = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.params.email;
    const result = await quizUserCollection.findOne({ id: id, email: email });
    res.status(202).send(result);
  } catch (error) {
    console.log(error);
    res.status(405).send({ message: 'quiz user get method' });
  }
};

module.exports = quizUsersGetController;
