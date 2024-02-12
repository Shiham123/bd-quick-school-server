const { userCollection } = require('../../DatabaseConfig/Db');

const usersGetByEmailController = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email };
    const result = await userCollection.find(query).toArray();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = usersGetByEmailController;
