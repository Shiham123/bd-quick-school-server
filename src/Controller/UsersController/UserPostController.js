const { userCollection } = require("../../DatabaseConfig/Db");

const usersPostControllers = async (req, res) => {
  try {
    const user = req?.body;
    const email = user?.email;
    const query = { email };
    const existingUser = await userCollection.findOne(query);
    if (existingUser) {
      return res
        .status(200)
        .send({ message: "User already exists", insertId: null });
    }
    const result = await userCollection.insertOne(user);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error in /users endpoint:", error);
  }
};
module.exports = usersPostControllers;
