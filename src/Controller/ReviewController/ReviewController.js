// const { reviewCollection } = require('../../DatabaseConfig/Db');
// const ReviewGetController = async (req, res) => {
//   try {
//     const result = await reviewCollection.find().toArray();
//     const filterdata = result.filter((item) => item.status === 'accepted');
//     return res.status(202).send(filterdata.reverse());
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = ReviewGetController;
