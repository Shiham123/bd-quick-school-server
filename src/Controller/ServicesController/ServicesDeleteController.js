const { ObjectId } = require("mongodb");
const { servicesCollection } = require("../../DatabaseConfig/Db");

const ServicesDeleteController = async (req, res) => {
  try {
    const id = req?.params?.id;
    const filter = { _id: new ObjectId(id) };
    const result = await servicesCollection.deleteOne(filter);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = ServicesDeleteController;
