const { quizUserCollection } = require('../../DatabaseConfig/Db');

const quizUsersPostController = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.params.email;
    const dataFormClient = req.body;

    const result = await quizUserCollection.insertOne({ id: id, email: email, ...dataFormClient });
    res.status(203).send(result);
  } catch (error) {
    console.log(error);
    res.status(403).send({ message: 'post method in quiz user' });
  }
};

module.exports = quizUsersPostController;
