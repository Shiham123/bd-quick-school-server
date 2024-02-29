const { activityCollection } = require("../../DatabaseConfig/Db");


const devicePostControllers = async (req, res) => {
    try {
        const { deviceInfo } = req?.body;
        // console.log(deviceInfo)
        const isExists = await activityCollection.findOne({ email: deviceInfo.email });
        if (isExists) {
            return res.status(200).send({ message: 'Device already exists' });
        }

        if (!isExists) {
            const result = await activityCollection.insertOne(deviceInfo)
            return res.status(200).send(result);
        }

        res.send(result)

    } catch (error) {
        console.log(error);
    }
};

module.exports = devicePostControllers;
