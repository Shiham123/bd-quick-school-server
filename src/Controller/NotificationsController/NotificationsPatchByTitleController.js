
const { ObjectId } = require("mongodb");
const { notificationCollection } = require("../../DatabaseConfig/Db");

const NotificationsPatchByTitleController = async (req, res) => {
    try {
        const { courseId, ...remining } = req.body
        const payload = {
            courseId: new ObjectId(courseId),
            ...remining
        }
        const result = await notificationCollection.insertOne(payload)
        return res.send(result)
    } catch (error) {
        console.error("An error occurred:", error);

    }
};

module.exports = NotificationsPatchByTitleController;
