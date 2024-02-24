const { orderCollection, userCollection } = require("../../DatabaseConfig/Db");

const PaymentConfirmController = async (req, res) => {
  const email = req.query.email;
  console.log("hey", email);
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
      // Update user role to "student"
      const userUpdateResult = await userCollection.updateOne(
        { email: email },
        { $set: { role: "student" } }
      );

      if (userUpdateResult.modifiedCount > 0) {
        console.log("User role updated to student");
        res.redirect(`http://localhost:5173/MyCourses`); // TODO: netlify link
      } else {
        console.log("Failed to update user role");
        res.status(500).send("Failed to update user role");
      }
    } else {
      console.log("Failed to update payment status");
      res.status(500).send("Failed to update payment status");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = PaymentConfirmController;
