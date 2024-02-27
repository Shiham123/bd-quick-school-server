const { notificationCollection } = require("../../DatabaseConfig/Db");



const NotificationsGetController = async (req, res) => {
    try {
        const notification = await notificationCollection.find().toArray();
        return res.status(200).send(notification)
    } catch (error) {
        console.error('Error fetching notification:', error);
        res.status(500).send({ error: 'Internal server error' });
    }

};

module.exports = NotificationsGetController;