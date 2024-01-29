require("dotenv").config();

const PortNumber = process.env.PORT || 5000;

//Database COnnection Url
const databaseUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.28sxkey.mongodb.net/?retryWrites=true&w=majority`;
// const databaseUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.at6gzve.mongodb.net/?retryWrites=true&w=majority`;

module.exports = { PortNumber, databaseUrl };
