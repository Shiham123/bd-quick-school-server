
const { ObjectId } = require("mongodb");
const { activityCollection } = require("../../DatabaseConfig/Db");



const deviceDeleteByIdController = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await activityCollection.deleteOne(query);
    res.status(200).send(result);
};

module.exports = deviceDeleteByIdController;