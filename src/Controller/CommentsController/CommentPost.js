const { CommentCollectoin } = require("../../DatabaseConfig/Db");

const CommentPostController = async (req, res) => {
  try {
    const HelpDesk = req?.body;
    const result = await CommentCollectoin.insertOne(HelpDesk);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = CommentPostController;
