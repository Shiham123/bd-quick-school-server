const { helpDeskCollection } = require("../../DatabaseConfig/Db");

const HelpPostController = async (req, res) => {
  try {
    const HelpDesk = req?.body;
    const result = await helpDeskCollection.insertOne(HelpDesk);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = HelpPostController;
