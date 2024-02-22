const { orderCollection, userCollection } = require("../../DatabaseConfig/Db");

// Function to generate a unique student ID in the format "BDQS" followed by a random 5-digit number
function generateStudentID() {
  const randomNumber = Math.floor(10000 + Math.random() * 90000); // Generates a random 5-digit number
  return `BDQS${randomNumber}`;
}

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
      // Check if the user already has a student ID
      const user = await userCollection.findOne({ email: email });
      if (!user.studentId) {
        // Generate a new student ID if the user doesn't have one already
        const studentId = generateStudentID();
        // Update user document with the new student ID
        const userUpdateResult = await userCollection.updateOne(
          { email: email },
          { $set: { role: "student", studentId: studentId } }
        );
        if (userUpdateResult.modifiedCount > 0) {
          console.log("Student ID generated and user role updated to student");
        } else {
          console.log("Failed to generate student ID or update user role");
          res.status(500).send("Failed to generate student ID or update user role");
          return;
        }
      } else {
        console.log("User already has a student ID");
      }
      res.redirect(`http://localhost:5173/MyCourses`); // TODO : Netlify Link
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
