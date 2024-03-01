const { ObjectId } = require("mongodb");
const { courseVideoCollection } = require("../../DatabaseConfig/Db");

const videoPatchReactionController = async (req, res) => {
  try {
    const {
      lessionName,
      topicName,
      courseId,
      videoId,
      email,
      notes,
      likesData,
      disLikesData,
    } = req?.body;

    // Likes And Dislikes Data Generator
    const likesDisLikesGenerator = () => {
      if (likesData) {
        return "likes";
      } else if (disLikesData) {
        return "disLikes";
      }
    };

    const togleLikesDislikesGenerator = () => {
      if (likesData) {
        return "disLikes";
      } else if (disLikesData) {
        return "likes";
      }
    };

    const genratorLikesDisLikesValue = likesDisLikesGenerator();
    const toggleReaction = togleLikesDislikesGenerator();

    //
    const filter = { courseId: new ObjectId(courseId) };

    //Data Matching
    const document = await courseVideoCollection.findOne(filter, {
      [`${lessionName}.${topicName}`]: {
        $elemMatch: { id: videoId },
      },
    });

    //Set Likes Email
    if (
      document &&
      document[lessionName] &&
      document[lessionName][0] &&
      document[lessionName][0][topicName]
    ) {
      let matchPropertyIndex = document[lessionName][0][topicName].findIndex(
        (ele) => ele?.id == videoId
      );

      //checking Reaction User
      const isExistReactonUser =
        document[lessionName][0][topicName][matchPropertyIndex][
          genratorLikesDisLikesValue
        ]?.indexOf(email);

      //Toggle Reaction Checks
      const isExistToggleReaction =
        document[lessionName][0][topicName][matchPropertyIndex][
          toggleReaction
        ]?.indexOf(email);

      //Set Notes
      if (notes) {
        const isExistNoteUserArray = document[lessionName][0][topicName][
          matchPropertyIndex
        ]?.note?.filter((ele) => ele?.email == email);

        // if existing note user then update notes
        if (isExistNoteUserArray?.length > 0) {
          const matchNoteUserPropertyIndex = document[lessionName][0][
            topicName
          ][matchPropertyIndex].note.findIndex((ele) => ele.email == email);
          //
          await courseVideoCollection.updateOne(filter, {
            $set: {
              [`${lessionName}.0.${topicName}.${matchPropertyIndex}.note.${matchNoteUserPropertyIndex}.notes`]:
                notes,
            },
          });
        } else {
          // Not Existing then save New array of objects
          await courseVideoCollection.updateOne(filter, {
            $addToSet: {
              [`${lessionName}.0.${topicName}.${matchPropertyIndex}.note`]: {
                email,
                notes,
              },
            },
          });
        }
      }

      //Remove Likes
      if (genratorLikesDisLikesValue && isExistReactonUser >= 0) {
        const result = await courseVideoCollection.updateOne(filter, {
          $pull: {
            [`${lessionName}.0.${topicName}.${matchPropertyIndex}.${genratorLikesDisLikesValue}`]:
              email,
          },
        });

        return res.status(200).send(result);
      }

      //Set Likes
      if (
        genratorLikesDisLikesValue &&
        (isExistToggleReaction < 0 || isExistToggleReaction === undefined)
      ) {
        const result = await courseVideoCollection.updateOne(filter, {
          $addToSet: {
            [`${lessionName}.0.${topicName}.${matchPropertyIndex}.${genratorLikesDisLikesValue}`]:
              email,
          },
        });
        return res.status(200).send(result);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = videoPatchReactionController;
