const { userCollection } = require('../../DatabaseConfig/Db');

const usersGetByEmailController = async (req, res) => {
  const email = req.params.email;
  const query = { email };
  const result = await userCollection.find(query).toArray();
  res.status(200).send(result);
};

module.exports = usersGetByEmailController;
