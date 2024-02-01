const { quizUserCollection } = require('../../DatabaseConfig/Db');

const quizUsersPostController = async (req, res) => {
  try {
    const email = req.params.email;
    const data = req.body;
    const result = await quizUserCollection.insertOne({ email: email, ...data });
    res.status(202).send(result);
  } catch (error) {
    console.log(error);
    res.status(403).send({ message: 'post method in quiz user' });
  }
};

module.exports = quizUsersPostController;
