const { userCollection } = require('../../DatabaseConfig/Db');

const usersAdminGetByEmailController = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const user = await userCollection.findOne(query);
    let admin = false;

    if (user) {
      admin = user?.role === 'admin';
    }

    res.send({ admin });
  } catch (error) {
    console.error(error);
  }
};

module.exports = usersAdminGetByEmailController;
