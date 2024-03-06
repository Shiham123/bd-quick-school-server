const { ObjectId } = require("mongodb");
const { helpDeskCollection } = require("../../DatabaseConfig/Db");

const HelpPostController = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await helpDeskCollection.findOne(query);
    res.status(200).send(result);
};

module.exports = HelpPostController;
