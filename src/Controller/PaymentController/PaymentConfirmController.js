const { orderCollectoin } = require("../../DatabaseConfig/Db");

const PaymentConfirmController = async (req, res) => {
  try {
    console.log(req?.params?.tranID);
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
        `http://localhost:5173/payment/succsess/${req.params.tranID}`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = PaymentConfirmController;
