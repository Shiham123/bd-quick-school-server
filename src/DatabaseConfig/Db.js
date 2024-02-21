const { MongoClient } = require("mongodb");
const { databaseUrl } = require("../Secret");

// MongoDB Client
const client = new MongoClient(databaseUrl);

const mongodbConnection = async () => {
  try {
    await client.connect();
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Not Connected");
  }
};

const bdQuickSchoolDB = client.db("bdquickschoolDB");

const orderCollection = bdQuickSchoolDB.collection('order');
const userCollection = bdQuickSchoolDB.collection('users');
const quizUserCollection = bdQuickSchoolDB.collection('quizUser');
const servicesCollection = bdQuickSchoolDB.collection('services');
const reviewCollection = bdQuickSchoolDB.collection('reviewUser');
const likeCollection = bdQuickSchoolDB.collection('likeCollection');
const dislikeCollection = bdQuickSchoolDB.collection('dislikeCollection');
const announcementCollection = bdQuickSchoolDB.collection('announcement');
const helpDeskCollection = bdQuickSchoolDB.collection('helpDesk');
const courseBookmarkCollection = bdQuickSchoolDB.collection('servicesBookmark');
const CommentCollectoin = bdQuickSchoolDB.collection("Comments");
module.exports = {
  mongodbConnection,
  servicesCollection,
  userCollection,
  orderCollection,
  quizUserCollection,
  reviewCollection,
  announcementCollection,
  helpDeskCollection,
  likeCollection,
  dislikeCollection,
  announcementCollection,
  CommentCollectoin,
  courseBookmarkCollection,
};
