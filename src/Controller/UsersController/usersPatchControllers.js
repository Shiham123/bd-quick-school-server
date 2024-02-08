const { userCollection } = require("../../DatabaseConfig/Db");

const usersPatchControllers = async (req, res) => {
  try {
    const email = req.params?.email;
    const query = { email };
    const updateValue = { $set: req?.body };
    const result = await userCollection.updateOne(query, updateValue);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = usersPatchControllers;
