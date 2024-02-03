const { ObjectId } = require("mongodb");
const { orderCollectoin } = require("../../DatabaseConfig/Db");
const SSLCommerzPayment = require("sslcommerz-lts");

const store_id = "bdqui65ac0e9331f13";
const store_passwd = "bdqui65ac0e9331f13@ssl";
const is_live = false; //true for live, false for sandbox
const tran_id = new ObjectId().toString();

const OrderPostController = async (req, res) => {
  try {
    const data = {
      total_amount: 100,
      currency: "BDT",
      tran_id: tran_id, // use unique tran_id for each api call
      success_url: `https://bd-quick-school-server-plum.vercel.app/payment/succsess/${tran_id}`, // TODO: vercel link
      fail_url: `https://bd-quick-school-server-plum.vercel.app/payment/fail/${tran_id}`, // TODO: vercel link
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
  } catch (error) {
    console.log(error);
  }
};
module.exports = OrderPostController;
