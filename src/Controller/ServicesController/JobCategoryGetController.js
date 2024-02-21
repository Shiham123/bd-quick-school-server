const { servicesCollection } = require("../../DatabaseConfig/Db");


const JobCategoryGetController = async (req, res) => {
    try {
        const result = await servicesCollection.find().toArray();
        return res.status(200).send(result.reverse());
        // const query = { category : "Job-Preparation" };
        // const cursor = servicesCollection.find(query);
        // const result = await cursor.toArray();
        // res.send(result);
        // console.log('job-preparation category processed successfully');
    } catch (error) {
        console.error(error);
    }
};
module.exports = JobCategoryGetController;
