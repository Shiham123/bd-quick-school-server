const { orderCollection } = require('../../DatabaseConfig/Db');

const OrderGetByEmailController = async (req, res) => {
    try {
        const result = await orderCollection
            .aggregate([
                { $lookup: { from: 'services', localField: 'productId', foreignField: '_id', as: 'productDetails' } },
                { $unwind: '$productDetails' },
                { $lookup: { from: 'users', localField: 'userId', foreignField: '_id', as: 'orderUser' } },
                { $unwind: '$orderUser' },
                { $match: { "orderUser.email": `${req?.params?.email}` } },
                {
                    $project: {
                        tranjactionId: 1,
                        time: 1,
                        paidStatus: 1,
                        productDetails: { title: 1, price: 1 },
                        orderUser: { email: 1, name: 1 },
                    },
                },
                { $sort: { time: -1 } },
            ])
            .toArray();
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
};
module.exports = OrderGetByEmailController;
