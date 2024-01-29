const { userCollection } = require("../../DatabaseConfig/Db");

const usersGetControllers = async (req, res) => {
  try {
    const result = await userCollection.find().toArray();
    res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
module.exports = usersGetControllers;
