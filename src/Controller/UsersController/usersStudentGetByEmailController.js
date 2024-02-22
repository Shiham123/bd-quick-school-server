const { userCollection } = require("../../DatabaseConfig/Db");


const usersStudentGetByEmailController = async (req, res) => {
    try {
        const email = req.params.email;
        const query = { email: email };
        const user = await userCollection.findOne(query);
        let student = false;

        if (user) {
            student = user?.role === 'student';
        }

        res.send({ student });
    } catch (error) {
        console.error(error);
    }
};

module.exports = usersStudentGetByEmailController;