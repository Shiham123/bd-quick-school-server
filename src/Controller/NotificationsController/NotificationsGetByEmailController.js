const { orderCollection } = require('../../DatabaseConfig/Db');

const NotificationsGetByEmailController = async (req, res) => {
  try {
    const email = req?.params?.email;
    const result = await orderCollection
      .aggregate([
        {
          $lookup: {
            from: 'notification',
            localField: 'courseId',
            foreignField: 'productId',
            as: 'NotificationDatas',
          },
        },
        {
          $match: { cus_email: email },
        },
        {
          $project: {
            NotificationDatas: 1,
            productId: 1,
          },
        },
        {
          $group: {
            _id: null,
            ProductIds: { $addToSet: '$productId' },
            notification: { $addToSet: '$NotificationDatas' },
          },
        },
        {
          $unwind: '$notification',
        },
        {
          $unwind: '$notification',
        },
        {
          $match: {
            $expr: {
              $in: ['$notification.courseId', '$ProductIds'],
            },
          },
        },
        {
          $group: {
            _id: null,
            notifications: {
              $addToSet: {
                _id: '$notification._id',
                title: '$notification.title',
                isRead: '$notification.isRead',
                date: '$notification.date',
              },
            },
          },
        },
        {
          $project: {
            _id: 0,
            notifications: 1,
          },
        },
        {
          $unwind: '$notifications',
        },
        {
          $sort: { 'notifications.date': -1 },
        },
        {
          $group: {
            _id: null,
            notifications: { $push: '$notifications' },
          },
        },
        {
          $project: {
            _id: 0,
            notifications: 1,
          },
        },
      ])
      .toArray();

    return res.send(result.length > 0 ? result[0].notifications : []);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = NotificationsGetByEmailController;
