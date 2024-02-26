const { notificationCollection } = require("../../DatabaseConfig/Db");



const NotificationsGetByCourseIdController = async (req, res) => {
    try {
        const notifications = await notificationCollection.find({ courseId: req?.query?.courseId }).toArray();
        return res.status(200).send(notifications)
    } catch (error) {
        console.error('Error fetching notification:', error);
        res.status(500).send({ error: 'Internal server error' });
    }

};

module.exports = NotificationsGetByCourseIdController;