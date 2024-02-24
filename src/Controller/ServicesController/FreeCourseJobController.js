
const { FreeCourseJobRoute } = require("../../DatabaseConfig/Db");

const FreeCourseJobController = async (req, res) => {
    try {
        const result = await FreeCourseJobRoute.find().toArray();
        return res.status(200).send(result.reverse());

    } catch (error) {
        console.log(error);
    }
};
module.exports = FreeCourseJobController;