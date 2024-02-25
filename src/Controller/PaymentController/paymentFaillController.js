const { orderCollection } = require('../../DatabaseConfig/Db');

const paymentFaillController = async (req, res) => {
  try {
    const result = await orderCollection.deleteOne({
      tranjactionId: req.params.tranID,
    });
    if (result.deletedCount) {
      res.redirect(`https://quick-school-client.netlify.app/payment/fail/${req.params.tranID}`); // TODO: netlify link
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = paymentFaillController;
