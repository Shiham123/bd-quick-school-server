const { MongoClient, ServerApiVersion } = require("mongodb");
const { databaseUrl } = require("../Secret");

//Mongodb Client
const client = new MongoClient(databaseUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//
const mongodbConnection = async () => {
  try {
    console.log("Mongodb Connected Successfully");
  } catch (error) {
    console.log("Mongodb Not Connected");
  }
};

//Database and Connection Name
const Users = client.db("bdquickschoolDB").collection("userCollection");

//Export MongoDb Collections
module.exports = {
  mongodbConnection,
  Users,
};
