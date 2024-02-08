const { servicesCollection } = require("../../DatabaseConfig/Db");

const ServicesPostController = async (req, res) => {
  try {
    const result = await servicesCollection.insertOne(req?.body);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = ServicesPostController;
