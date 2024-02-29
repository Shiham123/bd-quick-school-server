const { activityCollection } = require("../../DatabaseConfig/Db");


const devicePostControllers = async (req, res) => {
    try {
        const { deviceInfo } = req?.body;
        console.log(deviceInfo)

        const result = await activityCollection.insertOne(deviceInfo)

        res.send(result)

    } catch (error) {
        console.log(error);
    }
};

module.exports = devicePostControllers;
