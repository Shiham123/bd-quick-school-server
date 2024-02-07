const { quizUserCollection } = require("../../DatabaseConfig/Db");

const quizAllUsersGetController = async (req, res) => {
  try {
    const user = await quizUserCollection.find().toArray();
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};
module.exports = quizAllUsersGetController;
