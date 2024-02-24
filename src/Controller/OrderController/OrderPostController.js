const { ObjectId } = require("mongodb");
const {
  orderCollection,
  servicesCollection,
  userCollection,
} = require("../../DatabaseConfig/Db");
const SSLCommerzPayment = require("sslcommerz-lts");

const store_id = "bdqui65ac0e9331f13";
const store_passwd = "bdqui65ac0e9331f13@ssl";
const is_live = false;
const tran_id = new ObjectId().toString();

const OrderPostController = async (req, res) => {
  const product = await servicesCollection.findOne({
    _id: new ObjectId(req?.body.productId),
  });
  const order = req.body;
  const orderUser = await userCollection.findOne({
    email: { $eq: order?.email },
  });
  try {
    const data = {
      total_amount: product.price,
      currency: "BDT",
      tran_id: tran_id, // use unique tran_id for each api call
      success_url: `https://quiz-school-server.vercel.app/payment/succsess/${tran_id}?email=${order.email}`, // TODO: vercel link
      fail_url: `https://quiz-school-server.vercel.app/payment/fail/${tran_id}`, // TODO: vercel link
      cancel_url: 'http://localhost:3030/cancel',
      ipn_url: 'http://localhost:3030/ipn',
      shipping_method: 'Courier',
      product_name: product.title,
      product_category: "Electronic",
      product_profile: "general",
      cus_name: order.name,
      cus_email: order.email,
      cus_photo: order.photo,
      course_photo: order.image,
      time: order.dateTime,
      productId: order.productId,
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
    // console.log("Data:", data);
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    sslcz.init(data).then((apiResponse) => {
      // Redirect the user to payment gateway
      let GatewayPageURL = apiResponse.GatewayPageURL;
      res.send({ url: GatewayPageURL });

      const finalOrder = {
        paidStatus: false,
        tranjactionId: tran_id,
        totalamount: product.price,
        customerName: order.name,
        cus_email: order.email,
        time: order.dateTime,
        productId: new ObjectId(order.productId),
        userId: new ObjectId(orderUser._id),
        cus_photo: order.photo,
        course_photo: order.image,
        product,
      };
      const result = orderCollection.insertOne(finalOrder);
      console.log("Redirecting to: ", GatewayPageURL);
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = OrderPostController;
