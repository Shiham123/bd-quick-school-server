const { ObjectId } = require("mongodb");
const { servicesCollection } = require("../../DatabaseConfig/Db");

const coursePatchController = async (req, res) => {
  try {
    const { topicName, lessionName, course, topicLessionName } = req?.body;
    const filter = {
      _id: new ObjectId(course),
    };

    const bulkOps = [];
    if (lessionName) {
      bulkOps.push({
        updateOne: {
          filter,
          update: {
            $push: {
              lessionName: lessionName,
            },
          },
        },
      });
    }
    if (topicName && topicLessionName) {
      bulkOps.push({
        updateOne: {
          filter,
          update: {
            $push: {
              ["topics." + topicLessionName]: topicName,
            },
          },
        },
      });
    }
    const result = await servicesCollection.bulkWrite(bulkOps);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = coursePatchController;
