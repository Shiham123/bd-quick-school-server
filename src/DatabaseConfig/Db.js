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

const bdQuickSchoolDB = client.db('bdquickschoolDB');

const orderCollection = bdQuickSchoolDB.collection('order');
const userCollection = bdQuickSchoolDB.collection('users');
const quizUserCollection = bdQuickSchoolDB.collection('quizUser');
const servicesCollection = bdQuickSchoolDB.collection('services');
const reviewCollection = bdQuickSchoolDB.collection('reviewUser');

module.exports = {
  mongodbConnection,
  servicesCollection,
  userCollection,
  orderCollection,
  quizUserCollection,
  reviewCollection,
};
