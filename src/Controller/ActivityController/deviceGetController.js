const { activityCollection } = require("../../DatabaseConfig/Db");


const deviceGetController = async (req, res) => {
  try {
    const result = await activityCollection.find().toArray();
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = deviceGetController;