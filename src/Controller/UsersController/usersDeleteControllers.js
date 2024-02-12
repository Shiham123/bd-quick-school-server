const { userCollection } = require("../../DatabaseConfig/Db");

const usersDeleteControllers = async (req, res) => {
  try {
    const query = req?.params?.email;
    const result = await userCollection.deleteOne({ email: query });
    return res.status(200).send(result);
  } catch (error) {
    console.log("DeleteController Error", error);
  }
};
module.exports = usersDeleteControllers;
