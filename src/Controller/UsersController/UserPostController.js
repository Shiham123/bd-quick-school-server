const { Users } = require("../../DatabaseConfig/Db");

const usersPostControllers = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existsUser = await Users.findOne({
      email: email,
    });

    //Inserted User
    if (!existsUser) {
      const response = await Users.insertOne(req.body);
      return res.status(200).send(response);
    }
    return;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = usersPostControllers;
