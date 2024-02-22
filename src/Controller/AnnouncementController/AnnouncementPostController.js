const { announcementCollection } = require("../../DatabaseConfig/Db");

const AnnouncementPostController = async (req, res) => {
    try {
        const announcement = req?.body;
        // test 
        const result = await announcementCollection.insertOne(announcement);
        return res.status(200).send(result);
    } catch (error) {
       return res.status(400).send(error.message);
    }
};

module.exports = AnnouncementPostController;
