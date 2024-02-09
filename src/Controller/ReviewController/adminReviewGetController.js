const { reviewCollection } = require("../../DatabaseConfig/Db");

const adminReviewGetController = async (req, res) => {
  try {
    const reviews = await reviewCollection.find().toArray();
    return res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
  }
};
module.exports = adminReviewGetController;
