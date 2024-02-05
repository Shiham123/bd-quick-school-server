const paymentFaillController = async (req, res) => {
  try {
    const result = await orderCollectoin.deleteOne({
      tranjactionId: req.params.tranID,
    });
    if (result.deletedCount) {
      res.redirect(`http://localhost:5173/payment/fail/${req.params.tranID}`);
    }
  } catch (error) {
    console.log(error);
    
  }
};



module.exports = paymentFaillController;
