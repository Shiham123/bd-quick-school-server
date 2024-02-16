const { orderCollection } = require('../../DatabaseConfig/Db');

const allPaymentController = async (req, res) => {
  try {
    const result = await orderCollection.find().toArray();
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = allPaymentController;
