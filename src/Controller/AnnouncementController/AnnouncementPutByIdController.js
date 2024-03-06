const { ObjectId } = require("mongodb");
const { announcementCollection } = require("../../DatabaseConfig/Db");



const AnnouncementPutByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) }
        const options = { upsert: true };
        const updatedAnnouncement = req.body
        const announcement = {
            $set: {
                announcementtitle: updatedAnnouncement.announcementtitle,
                announcemensubdescription: updatedAnnouncement.announcemensubdescription,
                outcome: updatedAnnouncement.outcome,

            }
        }
        const result = await announcementCollection.updateOne(filter, announcement, options)
        res.send(result)
    } catch (error) {
        // Handle the error
        console.error(error);
    }
};

module.exports = AnnouncementPutByIdController;