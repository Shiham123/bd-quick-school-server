const { userCollection } = require("../DatabaseConfig/Db");


const StudentVerify = async (req, res, next) => {
  const email = req?.decoded?.email;
  const filter = { email: email };
  const user = await userCollection.findOne(filter);
  //
  const isStudent = user?.role === "student";
  if (!isStudent) {
    return res.status(403).send({ message: "forbidden access" });
  }

  next();
};

module.exports = StudentVerify;