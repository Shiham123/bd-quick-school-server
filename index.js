const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@cluster0.28sxkey.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    // await client.connect();


    // All Collection
    const userCollection = client.db("bdquickschoolDB").collection("users")






    // {** Users Related Api **}

    // Users Related Api *Post* 
    app.post('/api/v1/users', async (req, res) => {
      try {
        const user = req.body;
        const query = { email: user.email };
        const result = await userCollection.insertOne(user);
        res.send(result);
      } catch (error) {
        console.error('Error in /users endpoint:', error);
      }
    });









    // await client.db('admin').command({ ping: 1 });
    console.log('You successfully connected to MongoDB!');
  } catch (error) {
    console.log(error);
  }
};

run();

app.get('/', (request, response) => {
  response.send('BD Quick School database is connected');
});

app.listen(port, () => {
  console.log(`BD Quick School server is running at http://localhost:${port}`);
});
