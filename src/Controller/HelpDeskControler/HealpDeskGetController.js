const { helpDeskCollection } = require("../../DatabaseConfig/Db");


const HealpDeaskGetController = async (req, res) => {
  try {
    const user = await helpDeskCollection.find().toArray();
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};
module.exports = HealpDeaskGetController;