const { userCollection } = require("../DatabaseConfig/Db");

const VerifyAdmin = async (req, res, next) => {
  const email = req?.decoded?.email;
  const filter = { email: email };
  const user = await userCollection.findOne(filter);
  //
  const isAdmin = user?.role === "admin";
  if (!isAdmin) {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};
module.exports = VerifyAdmin;
