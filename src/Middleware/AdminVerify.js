const { userCollection } = require('../DatabaseConfig/Db');

const AdminVerify = async (req, res, next) => {
  const email = req?.decoded?.email;
  const filter = { email: email };
  const users = await userCollection.findOne(filter);

  const isAdmin = users?.role === 'admin';

  if (!isAdmin) {
    return res.status(404).send({ message: 'not a admin' });
  }

  next();
};

module.exports = AdminVerify;
