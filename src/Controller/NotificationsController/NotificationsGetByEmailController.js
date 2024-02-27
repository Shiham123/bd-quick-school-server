const { notificationCollection, orderCollection } = require("../../DatabaseConfig/Db");



const NotificationsGetByEmailController = async (req, res) => {
    try {
        const email = req?.params?.email
        const result = await orderCollection.aggregate([
            {
                $lookup: {
                    from: "notification",
                    localField: "courseId",
                    foreignField: "productId",
                    as: "NotificationDatas"
                }
            },
            {
                $match: { "cus_email": email }
            },
            {
                $project: {
                    NotificationDatas: 1,
                    productId: 1
                }
            },
            {
                $group: {
                    _id: null,
                    ProductIds: { $addToSet: "$productId" },
                    notification: { $addToSet: "$NotificationDatas" }
                }
            },

            {
                $unwind: "$notification"
            },
            {
                $unwind: "$notification"
            },
            {
                $match: {
                    $expr: {
                        $in: ["$notification.courseId", "$ProductIds"]
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    notificationTitle: { $addToSet: "$notification.title" }
                }
            },
            {
                $project: {
                    _id: 0
                }
            }
        ])
            .toArray()
        return res.send(result)

    } catch (error) {
        console.log(error)
    }

};

module.exports = NotificationsGetByEmailController;