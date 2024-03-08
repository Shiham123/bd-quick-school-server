const { ObjectId } = require('mongodb');
const { courseVideoCollection } = require('../../DatabaseConfig/Db');

const videoGetController = async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { courseId: new ObjectId(id) };
    const result = await courseVideoCollection
      .aggregate([
        { $match: filter },
        {
          $project: {
            _id: 0,
            courseId: 0,
          },
        },
        {
          $group: { _id: null, fullCourseVideos: { $push: '$$ROOT' } },
        },
      ])
      .toArray();
    return res.status(200).send(result[0].fullCourseVideos);
  } catch (error) {
    console.log(error);
  }
};
module.exports = videoGetController;
