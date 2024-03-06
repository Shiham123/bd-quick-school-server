const { ObjectId } = require("mongodb");
const { announcementCollection } = require("../../DatabaseConfig/Db");


const AnnouncementDeleteByIdController = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await announcementCollection.deleteOne(query);
    res.status(200).send(result);
};

module.exports = AnnouncementDeleteByIdController;