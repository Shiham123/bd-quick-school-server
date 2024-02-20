const { servicesBookmark } = require('../../DatabaseConfig/Db');

const servicesBookmarkPost = async (req, res) => {
  try {
    const payload = req.body;

    const result = await servicesBookmark.insertOne(payload);
    return res.send(200).json({ result });
  } catch (error) {
    return res.send(400).json({ message: error.message });
  }
};

module.exports = { servicesBookmarkPost };
