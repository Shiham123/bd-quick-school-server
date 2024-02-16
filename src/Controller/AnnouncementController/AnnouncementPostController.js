const { announcementCollection } = require("../../DatabaseConfig/Db");

const AnnouncementPostController = async (req, res) => {
    try {
        const announcement = req?.body;
        const result = await announcementCollection.insertOne(announcement);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports = AnnouncementPostController;
