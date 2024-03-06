const { activityCollection } = require("../../DatabaseConfig/Db");


const deviceGetByEmailController = async (req, res) => {
    try {
        const email = req?.params?.email;
        const query = { email };
        const result = await activityCollection.find(query).toArray();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports = deviceGetByEmailController;
