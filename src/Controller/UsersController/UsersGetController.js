const { userCollection } = require("../../DatabaseConfig/Db");

const usersGetControllers = async (req, res) => {
  try {
    let filter = {};
    // Check if the 'type' query parameter is provided
    if (req.query.type) {
      // Apply filter based on the type
      if (req.query.type === "Admin") {
        filter = { role: "admin" };
      } else if (req.query.type === "User") {
        filter = { role: "user" };
      } else if (req.query.type === "Banned User") {
        filter = { banned: true };
      }
    }

    const result = await userCollection.find(filter).toArray();
    res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
};
module.exports = usersGetControllers;
