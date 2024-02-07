const { reviewCollection } = require("../../DatabaseConfig/Db");


const ReviewGetController = async (req,res) =>{
    

    try {
       
        const result = await reviewCollection.find().toArray();
        res.status(202).send(result);
    } catch (error) {
        console.log(error);
        res.status(405).send({ message: 'review section get method error' });
    }
}

module.exports = ReviewGetController