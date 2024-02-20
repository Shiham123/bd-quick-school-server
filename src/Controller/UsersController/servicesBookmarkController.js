const { courseBookmarkCollection } = require('../../DatabaseConfig/Db');

const servicesBookmarkPost = async (req, res) => {
  try {
    const payload = req.body;

    const result = await courseBookmarkCollection.insertOne(payload);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteBookmark = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.params.email;

    const query = { currentProductId: id, loggedInUserEmail: email };

    const exitsData = await courseBookmarkCollection.findOne(query);

    if (exitsData) {
      const result = await courseBookmarkCollection.deleteOne(query);
      return res.status(200).json({ result });
    } else {
      return res.status(300).json({ message: 'not exits this user' });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { servicesBookmarkPost, deleteBookmark };
