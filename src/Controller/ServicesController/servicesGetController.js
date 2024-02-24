const { servicesCollection } = require("../../DatabaseConfig/Db");

const servicesGetController = async (req, res) => {


  try {
    const query = { category: "Our-Services" }; // Specify the category you want to query
    const result = await servicesCollection.find(query).toArray();
    return res.status(200).send(result.reverse());
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
  // try {
  //   const category = req.query.category; // Assuming the category is passed as a query parameter
  //   const query = category ? { category } : {}; // If a category is provided, filter by that category, otherwise, return all documents
  //   const result = await servicesCollection.find(query).toArray();
  //   return res.status(200).send(result.reverse());

  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).send("Internal Server Error");
  // }
};

module.exports = servicesGetController;




// const { servicesCollection } = require("../../DatabaseConfig/Db");

// const servicesGetController = async (req, res) => {
//   try {
//     const result = await servicesCollection.find().toArray();
//     return res.status(200).send(result.reverse());
    
//   } catch (error) {
//     console.log(error);
//   }
// };
// module.exports = servicesGetController;
