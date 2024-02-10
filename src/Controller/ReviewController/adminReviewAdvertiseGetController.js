const { userCollection } = require("../../DatabaseConfig/Db");


const adminAdvertiseReviewGetController = async (req, res) => {
    try {
        const query = { status: "accepted" };
        const cursor = userCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
        console.log("Review processed successfully");
    } catch (error) {
        console.error(error);
    }
}

module.exports = adminAdvertiseReviewGetController