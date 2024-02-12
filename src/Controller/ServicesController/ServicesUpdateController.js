const { ObjectId } = require("mongodb");
const { servicesCollection } = require("../../DatabaseConfig/Db");

const ServicesUpdateController = async (req, res) => {
  try {
    const { id, ...withoutId } = req?.body;
    const filter = { _id: new ObjectId(id) };
    const updated = { $set: withoutId };
    const options = { new: true };
    const result = await servicesCollection.updateOne(filter, updated, options);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = ServicesUpdateController;
