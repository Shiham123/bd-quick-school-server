const { userCollection } = require('../DatabaseConfig/Db');

const AdminVerify = async (req, res, next) => {
  const email = req?.decoded?.email;
  const filter = { email: email };
  const users = await userCollection.findOne(filter);

  const isAdmin = users?.role === 'admin';

  if (!isAdmin) {
    return res.status(403).send({ message: 'forbidden access' });
  }

  next();
};

module.exports = AdminVerify;
