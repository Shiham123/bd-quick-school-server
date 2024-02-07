const { ObjectId } = require("mongodb");
const { reviewCollection } = require("../../DatabaseConfig/Db");

const ReviewPatchController = async (req, res) => {
  try {
    const id = req?.params?.id;
    const filter = { _id: new ObjectId(id) };
    const query = { $set: req?.body };
    const options = { new: true };
    const result = await reviewCollection.updateOne(filter, query, options);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = ReviewPatchController;
