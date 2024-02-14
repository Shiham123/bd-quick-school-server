const { ObjectId } = require('mongodb');
const { userCollection } = require('../../DatabaseConfig/Db');

const usersGetByIdController = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await userCollection.findOne(query);
  res.status(200).send(result);
};

module.exports = usersGetByIdController;
