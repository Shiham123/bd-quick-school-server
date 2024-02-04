const { userCollection } = require('../../DatabaseConfig/Db');

const usersPostControllers = async (req, res) => {
  try {
    const user = req.body;
    console.log(user);

    const result = await userCollection.insertOne(user);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error in users endpoint:', error);
  }
};
module.exports = usersPostControllers;
