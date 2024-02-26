const { notificationCollection } = require("../../DatabaseConfig/Db");



const NotificationsGetByCourseIdController = async (req, res) => {
    try {
        const courseId = req?.params?.courseId;
        const query = { courseId: courseId }
        const notifications = await notificationCollection.find(query).toArray();
        return res.status(200).send(notifications)
    } catch (error) {
        console.error('Error fetching notification:', error);
        res.status(500).send({ error: 'Internal server error' });
    }

};

module.exports = NotificationsGetByCourseIdController;