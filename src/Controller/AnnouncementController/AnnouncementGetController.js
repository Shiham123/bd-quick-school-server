const { announcementCollection } = require("../../DatabaseConfig/Db");


const AnnouncementGetController = async (req, res) => {
  try {
    const user = await announcementCollection.find().toArray();
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};
module.exports = AnnouncementGetController;