const { orderCollectoin } = require("../../DatabaseConfig/Db");

const allPaymentController = async (req, res) => {
  try {
    const result = await orderCollectoin.find().toArray();
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = allPaymentController;
