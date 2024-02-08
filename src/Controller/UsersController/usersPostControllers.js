const { userCollection } = require('../../DatabaseConfig/Db');

const UsersPostController = async (req, res) => {
  try {
    const { email } = req?.body;
    const isExists = await userCollection.findOne({ email });
    if (isExists) {
      return res.status(200).send({ message: 'User already exists' });
    }
    //
    if (!isExists) {
      const result = await userCollection.insertOne(req?.body);
      return res.status(200).send(result);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = UsersPostController;
