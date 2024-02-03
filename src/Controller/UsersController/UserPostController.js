const { userCollection } = require('../../DatabaseConfig/Db');

const usersPostControllers = async (req, res) => {
  try {
    const user = req.body;
    const email = user.email;

    console.log(user);
    console.log(email);

    const result = await userCollection.insertOne(user);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error in users endpoint:', error);
  }
};
module.exports = usersPostControllers;
