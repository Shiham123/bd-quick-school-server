const { Users } = require("../../DatabaseConfig/Db");

const usersGetControllers = async (req, res, next) => {
  try {
    const result = await Users.find().toArray();
    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = usersGetControllers;
