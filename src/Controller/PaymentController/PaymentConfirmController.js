const { orderCollectoin } = require("../../DatabaseConfig/Db");

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
      res.redirect(
        `https://capable-syrniki-7efdfb.netlify.app/payment/succsess/${req.params.tranID}`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = PaymentConfirmController;
