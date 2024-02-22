const { CommentCollectoin } = require("../../DatabaseConfig/Db");

const CommentPostController = async (req, res) => {
  try {
    const Comments = req?.body;
    const result = await CommentCollectoin.insertOne(Comments);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = CommentPostController;
