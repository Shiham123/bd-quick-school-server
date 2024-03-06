const { ObjectId } = require("mongodb");
const { userCollection, orderCollection } = require("../../DatabaseConfig/Db");


const UsersBannedPatchByIdController = async (req, res) => {
    try {
        const { role } = req.body;
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };

        // Update user status
        const updateStatus = {
            $set: {
                role: role
            }
        };
        const roleResult = await userCollection.updateOne(query, updateStatus);

        // Find updated user
        const updatedUser = await userCollection.findOne(query);

        // Extract user's email
        const bannedEmail = updatedUser.email;

        // Delete orders associated with the banned user
        const deletedOrderResult = await orderCollection.deleteMany({ "orderUser.email": bannedEmail });

        res.send({ roleResult, deletedOrderResult });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = UsersBannedPatchByIdController;
