const { reviewCollection } = require("../../DatabaseConfig/Db")

const ReviewPostController = async(req, res) =>{
    // const result = await reviewCollection

    try {
        const id = req.params.id;
        const ReviewForm = req.body;

        const result = await reviewCollection.insertOne(ReviewForm);
        res.status(203).send(result);
    } catch (error) {
        console.log(error);
        res.status(403).send({ message: 'post method review section' });
    }
}

module.exports = ReviewPostController