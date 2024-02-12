const { ObjectId } = require("mongodb");
const { reviewCollection } = require("../../DatabaseConfig/Db");



const adminReviewAdvertiseRemovePatchController = async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const updatedDoc = {
        $set: {
            advertise: false,
        },
    };

    const result = await reviewCollection.updateOne(filter, updatedDoc);
    res.send(result);
};

module.exports = adminReviewAdvertiseRemovePatchController;