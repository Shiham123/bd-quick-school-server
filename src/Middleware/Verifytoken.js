const jwt = require('jsonwebtoken');
const { access_jwt_token } = require('../Secret');

const VerifyToken = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send({ message: 'unauthorized access' });
    }
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, access_jwt_token, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: 'unauthorized access' });
      }

      req.decoded = decoded;
      next();
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = VerifyToken;
