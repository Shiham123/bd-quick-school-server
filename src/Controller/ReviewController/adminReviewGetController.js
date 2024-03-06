const { reviewCollection } = require('../../DatabaseConfig/Db');

const adminReviewGetController = async (req, res) => {
  try {
    let filter = {};
    // Check if the 'type' query parameter is provided
    if (req.query.type) {
      // Apply filter based on the type
      if (req.query.type === 'Accept') {
        filter = { status: 'accepted' };
      } else if (req.query.type === 'Reject') {
        filter = { status: 'rejected' };
      }
    }
    const reviews = await reviewCollection.find(filter).toArray();
    return res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
  }
};
module.exports = adminReviewGetController;
