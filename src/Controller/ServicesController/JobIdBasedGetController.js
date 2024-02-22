const { ObjectId } = require("mongodb");
const { servicesCollection } = require("../../DatabaseConfig/Db");

const JobIdBasedGetController = async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new ObjectId(id) };
        const result = await servicesCollection.findOne(query);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
};
module.exports = JobIdBasedGetController;
