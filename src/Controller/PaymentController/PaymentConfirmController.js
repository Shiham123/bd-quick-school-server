// const { orderCollection, userCollection } = require("../../DatabaseConfig/Db");

// const PaymentConfirmController = async (req, res) => {
//   try {
//     const transactionId = req?.params?.tranID;
//     const order = req.body;
//     console.log('body req', order)

//     // Update paidStatus in order collection
//     const orderUpdateResult = await orderCollection.updateOne(
//       { transactionId: transactionId },
//       {
//         $set: {
//           paidStatus: true,
//         },
//       }
//     );

//     // Check if the payment update was successful
//     if (orderUpdateResult.modifiedCount > 0) {
//       // Find the user associated with the transaction
//       const order = await orderCollection.findOne({ transactionId: transactionId });
//       // console.log(order)
//       // const userId = order.userId;
//       const userEmail = order.cus_email

//       console.log("User ID:", userId); // Log userId for troubleshooting

//       // Update the user's role to "student"
//       const userUpdateResult = await userCollection.updateOne(
//         { email: userEmail },
//         {
//           $set: {
//             role: "student",
//           },
//         }
//       );

//       console.log("User Update Result:", userUpdateResult); // Log user update result

//       // Redirect the user to the MyCourses page
//       res.redirect(`http://localhost:5173/MyCourses`);
//     } else {
//       // If the payment update was not successful
//       res.status(500).json({ message: "Failed to update payment status." });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "An error occurred." });
//   }
// };

// module.exports = PaymentConfirmController;


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
