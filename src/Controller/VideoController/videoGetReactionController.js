const { ObjectId } = require("mongodb");
const { courseVideoCollection } = require("../../DatabaseConfig/Db");
const videoGetReactionController = async (req, res) => {
  try {
    const { id, lessionName, topicName, courseId, email } = req.query;
    const result = await courseVideoCollection
      .aggregate([
        {
          $match: { courseId: new ObjectId(courseId) },
        },
        {
          $unwind: `$${lessionName}`,
        },
        {
          $unwind: `$${lessionName}.${topicName}`,
        },
        {
          $unwind: `$${lessionName}.${topicName}.note`,
        },
        {
          $match: {
            [`${lessionName}.${topicName}.note.email`]: email,
            [`${lessionName}.${topicName}.id`]: id,
          },
        },
        {
          $project: {
            _id: 0,
            note: `$${lessionName}.${topicName}.note.notes`,
            likes: `$${lessionName}.${topicName}.likes`,
            disLikes: `$${lessionName}.${topicName}.disLikes`,
          },
        },
        {
          $project: {
            likesIncludeEmail: { $in: [email, "$likes"] },
            disLikesIncludeEmail: { $in: [email, "$disLikes"] },
            likesArrayLength: { $size: "$likes" },
            disLikesArrayLength: { $size: "$disLikes" },
            note: 1,
          },
        },
      ])
      .toArray();

    return res.status(200).send(result);
    //
  } catch (error) {
    console.log(error);
  }
};
module.exports = videoGetReactionController;
