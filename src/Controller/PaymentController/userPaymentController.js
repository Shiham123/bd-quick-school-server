const { orderCollectoin } = require("../../DatabaseConfig/Db");

const userPaymentController = async (req, res) => {
  try {
    const email = req?.params?.email;
    const userDatas = await orderCollectoin
      .find({ cus_email: email })
      .toArray();
    return res.status(200).send(userDatas);
  } catch (error) {
    console.log(error);
  }
};
module.exports = userPaymentController;
