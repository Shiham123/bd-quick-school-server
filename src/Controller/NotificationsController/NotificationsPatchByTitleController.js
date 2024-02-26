const { notificationCollection } = require("../../DatabaseConfig/Db");


const NotificationsPatchByTitleController = async (req, res) => {
    try {
        const result = await notificationCollection.insertOne(
            req?.body,
        );
        res.json(result);
    } catch (error) {
        console.error(error);
    }

};

module.exports = NotificationsPatchByTitleController;