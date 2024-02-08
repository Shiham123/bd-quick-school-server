const { reviewCollection } = require("../../DatabaseConfig/Db");
const ReviewGetController = async (req, res) => {
  try {
    const result = await reviewCollection.find().toArray();
    const filterdata = result.filter((item) => item.status === "confirm");
    return res.status(202).send(filterdata);
  } catch (error) {
    console.log(error);
  }
};

module.exports = ReviewGetController;
