const { orderCollectoin } = require('../../DatabaseConfig/Db');

const PaymentConfirmController = async (req, res) => {
  try {
    const result = await orderCollectoin.updateOne(
      { tranjactionId: req?.params?.tranID },
      {
        $set: {
          paidStatus: true,
        },
      }
    );
    if (result.modifiedCount > 0) {
      res.redirect(`https://bdquickschool.netlify.app/payment/succsess/${req.params.tranID}`); // TODO: netlify link
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = PaymentConfirmController;
