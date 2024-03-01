const { activityCollection } = require("../../DatabaseConfig/Db");
const UAParser = require('ua-parser-js');

const devicePostControllers = async (req, res) => {
    try {
        const { deviceInfo } = req?.body;
        const isExists = await activityCollection.findOne({ email: deviceInfo.email });

        if (isExists) {
            return res.status(200).send({ message: 'Device already exists' });
        }

        // Parse user agent string
        const parser = new UAParser(deviceInfo.userAgent);
        const result = parser.getResult();

        

        // Insert deviceInfo into the database
        const insertResult = await activityCollection.insertOne(deviceInfo);
        return res.status(200).send(insertResult);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = devicePostControllers;
