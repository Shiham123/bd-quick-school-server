const { reviewCollection } = require('../../DatabaseConfig/Db');

const adminAdvertiseReviewGetController = async (req, res) => {
  try {
    const query = { advertise: true };
    const cursor = reviewCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
    console.log('Review processed successfully');
  } catch (error) {
    console.error(error);
  }
};

module.exports = adminAdvertiseReviewGetController;
