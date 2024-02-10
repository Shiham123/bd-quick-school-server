const { reviewCollection } = require("../../DatabaseConfig/Db");



const adminAdvertisementReviewGetController = async (req, res) => {
    try {
        const query = { status: "accepted" };
        const cursor = reviewCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
        console.log("Request processed successfully");
    } catch (error) {
        console.error(error);
    }
}

module.exports = adminAdvertisementReviewGetController