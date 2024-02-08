const { servicesCollection } = require("../../DatabaseConfig/Db");

const servicesGetController = async (req, res) => {
  try {
    const result = await servicesCollection.find().toArray();
    return res.status(200).send(result.reverse());
  } catch (error) {
    console.log(error);
  }
};
module.exports = servicesGetController;
