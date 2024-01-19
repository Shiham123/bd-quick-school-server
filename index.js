const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;



// Midlewares
app.use(cors())
app.use(express.json())



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





    // {** Jwt Related Api **}

    // jwt related Api **Post**
    app.post('/api/v1/jwt', async (req, res) => {
      try {
        const user = req.body;
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        console.log(token)
        res.send({ token });
      } catch (error) {
        console.error("Error creating JWT:", error);
      }
    });


    // {** Users Related Api **}

    // Users related Api **Get**
    app.get('/api/v1/users', async (req, res) => {
      try {
        // const user = req.header
        // console.log(req.headers)
        const result = await userCollection.find().toArray()
        res.send(result)
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    });

    // Users Related Api **Post** 
    app.post('/api/v1/users', async (req, res) => {
      try {
        const user = req.body;
        console.log(user)
        const query = { email: user.email };
        const existingUser = await userCollection.findOne(query);
        if (existingUser) {
          return res.send({ message: 'User already exists', insertId: null });
        }
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
