require('dotenv').config();

const PortNumber = process.env.PORT || 5000;
const access_jwt_token = process.env.ACCESS_TOKEN_SECRET;

//Database COnnection Url
const databaseUrl = `mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@cluster0.28sxkey.mongodb.net/?retryWrites=true&w=majority`;
// const databaseUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.at6gzve.mongodb.net/?retryWrites=true&w=majority`;
// const databaseUrl = 'mongodb://localhost:27017';

module.exports = { PortNumber, databaseUrl, access_jwt_token };