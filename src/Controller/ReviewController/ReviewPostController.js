const { reviewCollection } = require("../../DatabaseConfig/Db");
const ReviewPostController = async (req, res) => {
  try {
    const ReviewForm = req?.body;
    const result = await reviewCollection.insertOne(ReviewForm);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = ReviewPostController;
