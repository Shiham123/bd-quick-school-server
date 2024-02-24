
const { ObjectId } = require("mongodb");
const { FreeCourseJobRoute } = require("../../DatabaseConfig/Db");

const FreeIdCourseJobController = async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new ObjectId(id) };
        const result = await FreeCourseJobRoute.findOne(query);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
};
module.exports = FreeIdCourseJobController;