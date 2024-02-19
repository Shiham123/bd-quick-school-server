const { orderCollection } = require('../../DatabaseConfig/Db');

const PaymentConfirmController = async (req, res) => {
  try {
    const result = await orderCollection.updateOne(
      { tranjactionId: req?.params?.tranID },
      {
        $set: {
          paidStatus: true,
        },
      }
    );
    if (result.modifiedCount > 0) {
      res.redirect(`https://quick-school-client.netlify.app/MyCourses`); // TODO: netlify link
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = PaymentConfirmController;
