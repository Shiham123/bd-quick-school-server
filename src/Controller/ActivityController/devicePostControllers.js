const { activityCollection } = require("../../DatabaseConfig/Db");
const UAParser = require('ua-parser-js');

const devicePostControllers = async (req, res) => {
    try {
        const { deviceInfo } = req?.body;

        // Parse user agent string
        const parser = new UAParser(deviceInfo.userAgent);
        const result = parser.getResult();

        // Extract browser information
        const browserName = result.browser.name + " " + result.browser.version;

        // Query the database to find if a device with the same browser exists
        const isExists = await activityCollection.findOne({
            email: deviceInfo.email,
            browser: browserName
        });

        if (isExists) {
            return res.status(200).send({ message: 'Device with the same browser already exists' });
        }

        // Extract operating system and device information
        const osName = result.os.name + " " + result.os.version;
        const deviceName = result.device.model || "Unknown Device";

        // Add browser, operating system, and device information to deviceInfo
        deviceInfo.browser = browserName;
        deviceInfo.os = osName;
        deviceInfo.device = deviceName;

        // Insert deviceInfo into the database
        const insertResult = await activityCollection.insertOne(deviceInfo);
        return res.status(200).send(insertResult);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = devicePostControllers;
