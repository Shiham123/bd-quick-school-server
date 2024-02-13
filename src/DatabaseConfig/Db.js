const { MongoClient, ServerApiVersion } = require('mongodb');
const { databaseUrl } = require('../Secret');

//Mongodb Client
client = new MongoClient(databaseUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const mongodbConnection = async () => {
  try {
    // await client.connect();
    console.log('Mongodb Connected Successfully');
  } catch (error) {
    console.log('Mongodb Not Connected');
  }
};
const userCollection = client.db('bdquickschoolDB').collection('users');
const orderCollectoin = client.db('SSlPay').collection('order');
const quizUserCollection = client.db('bdquickschoolDB').collection('quizUser');
const servicesCollection = client.db('bdquickschoolDB').collection('services');
const reviewCollection = client.db('bdquickschoolDB').collection('reviewUser');

module.exports = {
  mongodbConnection,
  servicesCollection,
  userCollection,
  orderCollectoin,
  quizUserCollection,
  reviewCollection,
};
