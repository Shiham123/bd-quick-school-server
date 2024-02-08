const { ObjectId } = require("mongodb");
const { reviewCollection } = require("../../DatabaseConfig/Db");

const ReviewDeleteController = async (req, res) => {
  try {
    const id = req?.params?.id;
    const filter = { _id: new ObjectId(id) };
    const reviews = await reviewCollection.deleteOne(filter);
    return res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
  }
};
module.exports = ReviewDeleteController;
