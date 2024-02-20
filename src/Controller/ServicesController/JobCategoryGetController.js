const { servicesCollection } = require("../../DatabaseConfig/Db");


const JobCategoryGetController = async (req, res) => {
    try {
        const query = { category : true };
        const cursor = servicesCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
        console.log('Review processed successfully');
    } catch (error) {
        console.error(error);
    }
};
module.exports = JobCategoryGetController;
