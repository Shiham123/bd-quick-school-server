const usersGetControllers = async (req, res) => {
  try {
    // const result = await userCollection.find().toArray();
    // res.status(200).send(result);

    console.log('noting');
    res.send({ message: 'noting here' });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
module.exports = usersGetControllers;
