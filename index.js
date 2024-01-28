const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const SSLCommerzPayment = require("sslcommerz-lts");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

// middleWares
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;




const uri = `mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@cluster0.bkdyuro.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const store_id = "bdqui65ac0e9331f13";
const store_passwd = "bdqui65ac0e9331f13@ssl";
const is_live = false; //true for live, false for sandbox
const tran_id = new ObjectId().toString();

const run = async () => {
  try {

    //?  All Collection
    const userCollection = client.db('bdquickschoolDB').collection('users');
    const orderCollectoin = client.db("SSlPay").collection("order");

    // ! jwt related Api post
    app.post('/api/v1/jwt', async (req, res) => {
      try {
        const user = req.body;
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        console.log(token);
        res.send({ token });
      } catch (error) {
        console.error('Error creating JWT:', error);
      }
    });

    // ! Users related Api ------------GET
    app.get('/api/v1/users', async (req, res) => {
      try {
        // const user = req.header
        // console.log(req.headers)
        const result = await userCollection.find().toArray();
        res.send(result);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    });

    // ! Users Related Api ---------------POST
    app.post('/api/v1/users', async (req, res) => {
      try {
        const user = req.body;
        console.log(user);
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


    //  post oderd panding user and payment intrigatoin 
    app.post("/api/v1/order", async (req, res) => {
      const data = {
        total_amount: 100,
        currency: "BDT",
        tran_id: tran_id, // use unique tran_id for each api call
        success_url: `https://bd-quick-school-server-ten.vercel.app/payment/succsess/${tran_id}`,
        fail_url: `https://bd-quick-school-server-ten.vercel.app/payment/fail/${tran_id}`,
        cancel_url: "http://localhost:3030/cancel",
        ipn_url: "http://localhost:3030/ipn",
        shipping_method: "Courier",
        product_name: "Computer.",
        product_category: "Electronic",
        product_profile: "general",
        cus_name: "Customer Name",
        cus_email: "customer@example.com",
        cus_add1: "Dhaka",
        cus_add2: "Dhaka",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: "1000",
        cus_country: "Bangladesh",
        cus_phone: "01711111111",
        cus_fax: "01711111111",
        ship_name: "Customer Name",
        ship_add1: "Dhaka",
        ship_add2: "Dhaka",
        ship_city: "Dhaka",
        ship_state: "Dhaka",
        ship_postcode: 1000,  
        ship_country: "Bangladesh",
      };
      console.log(data);
      const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
      sslcz.init(data).then((apiResponse) => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL;
        res.send({ url: GatewayPageURL });
        const finalOrder = {
          paidStatus: false,
          tranjactionId: tran_id,
        };
        const result = orderCollectoin.insertOne(finalOrder);
        console.log("Redirecting to: ", GatewayPageURL);
      });
    });

    //  post payment Confiremd succses
    app.post("/payment/succsess/:tranID", async (req, res) => {
      console.log(req.params.tranID);
      const result = await orderCollectoin.updateOne(
        { tranjactionId: req.params.tranID },
        {
          $set: {
            paidStatus: true,
          },
        }
      );
      if (result.modifiedCount > 0) {
        res.redirect(
          `https://exquisite-cupcake-0b7d02.netlify.app/payment/succsess/${req.params.tranID}`
        );
      }
    });
    //  post payment failed 
    app.post("/payment/fail/:tranID", async (req, res) => {
      const result = await orderCollectoin.deleteOne({
        tranjactionId: req.params.tranID,
      });
      if (result.deletedCount) {
        res.redirect(
          `https://exquisite-cupcake-0b7d02.netlify.app/payment/fail/${req.params.tranID}`
        );
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
  console.log(`server is running on PORT :${port}`);
});
