const { ObjectId } = require("mongodb");
const { courseVideoCollection } = require("../../DatabaseConfig/Db");
const { uuid } = require("uuidv4");

const videoPostController = async (req, res) => {
  try {
    let { courseID, lessionName, videoUrl, videoTitle, topicName } = req?.body;
    const bulkOps = [];
    const postDatas = {
      courseId: new ObjectId(courseID),
      [lessionName]: [
        {
          [topicName]: [
            {
              videoTitle,
              videoUrl,
              id: uuid(),
              likes: [],
              disLikes: [],
              note: [],
              path: `${courseID}/${lessionName}/${topicName}`,
            },
          ],
        },
      ],
    };

    //Exists Check
    const isExist = await courseVideoCollection.findOne({
      courseId: new ObjectId(courseID),
    });

    //updated finding queary
    const filterByProductId = {
      _id: isExist?._id,
    };

    if (isExist && `${lessionName}` in isExist) {
      bulkOps.push({
        updateOne: {
          filter: filterByProductId,
          update: {
            $push: {
              [`${lessionName}.0.${topicName}`]: {
                videoTitle,
                videoUrl,
                id: uuid(),
                likes: [],
                disLikes: [],
                note: [],
                path: `${courseID}/${lessionName}/${topicName}`,
              },
            },
          },
        },
      });

      const result = await courseVideoCollection.bulkWrite(bulkOps);
      return res.status(200).send(result);
    } else if (isExist && !(`${lessionName}` in isExist)) {
      bulkOps.push({
        updateOne: {
          filter: filterByProductId,
          update: {
            $push: {
              [lessionName]: {
                [topicName]: [
                  {
                    videoTitle,
                    videoUrl,
                    id: uuid(),
                    likes: [],
                    disLikes: [],
                    note: [],
                    path: `${courseID}/${lessionName}/${topicName}`,
                  },
                ],
              },
            },
          },
        },
      });

      const result = await courseVideoCollection.bulkWrite(bulkOps);
      return res.status(200).send(result);
    }
    const result = await courseVideoCollection.insertOne(postDatas);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = videoPostController;
