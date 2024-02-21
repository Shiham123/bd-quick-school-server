const { CommentCollectoin } = require("../../DatabaseConfig/Db");

const CommentGet = async (req, res) => {
  try {
    const postId = req.params.id;
    const comments = await CommentCollectoin.find({ postId }).toArray(); 
    return res.status(200).send(comments);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = CommentGet;
