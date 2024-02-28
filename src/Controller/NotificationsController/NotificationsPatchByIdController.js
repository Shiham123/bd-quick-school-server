const { ObjectId } = require("mongodb");
const { notificationCollection } = require("../../DatabaseConfig/Db");

const NotificationsPatchByIdController = async (req, res) => {
    try {
        const id = req?.params?.id;
        const result = await notificationCollection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: { isRead: true } },
            { returnOriginal: false }
        );

        if (result.value) {
            res.status(200).json({ message: "Notification updated successfully", notification: result.value });
        } else {
            res.status(404).json({ message: "Notification not found" });
        }
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = NotificationsPatchByIdController;
