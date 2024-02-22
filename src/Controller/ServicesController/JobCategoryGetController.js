const { servicesCollection } = require("../../DatabaseConfig/Db");


const JobCategoryGetController = async (req, res) => {
    try {
        const query = { category: "Job-Preparation" }; // Specify the category you want to query
        const result = await servicesCollection.find(query).toArray();
        return res.status(200).send(result.reverse());
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = JobCategoryGetController;
