const { userCollection } = require("../../DatabaseConfig/Db");

const usersPutControllers = async (req, res) => {
  try {
    const userEmail = req?.params?.email;
    const filter = { email: userEmail };
    const options = { upsert: true };
    const users = req?.body;
    const items = {
      $set: {
        photoURL: users.photoURL,
        name: users?.name,
        phone: users?.phone,
      },
    };
    const result = await userCollection.updateOne(filter, items, options);
    res.status(200).send(result);
  } catch (error) {
    // Handle the error
    console.error(error);
  }
};
module.exports = usersPutControllers;
