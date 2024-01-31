const { userCollection } = require("../../DatabaseConfig/Db");

const usersAdminGetByEmailController = async (req, res) => {
    try {
        const email = req.params.email;

        if (email !== req.decoded.email) {
            return res.status(403).send({ message: 'forbidden access' });
        }

        const query = { email: email };
        const user = await userCollection.findOne(query);
        let admin = false;

        if (user) {
            admin = user?.role === 'admin';
        }

        res.send({ admin });
    } catch (error) {
        console.error(error);
    }
};

module.exports = usersAdminGetByEmailController;