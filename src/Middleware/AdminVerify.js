const { Users } = require('../src/Config/MongodbConfig');

const VerifyAdmin = async (req, res, next) => {
  const email = req?.decoded?.email;
  const filter = { email: email };
  const user = await Users.findOne(filter);
  //
  const isAdmin = user?.role === 'admin';
  if (!isAdmin) {
    return res.status(403).send({ message: 'forbidden access' });
  }
  next();
};
module.exports = VerifyAdmin;
