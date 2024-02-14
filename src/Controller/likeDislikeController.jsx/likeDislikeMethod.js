const { likeDislikeCollection } = require('../../DatabaseConfig/Db');

const likePost = async (req, res) => {
  try {
    const clientData = {
      likes: 1,
      loggedInUserEmail: req.body.loggedInUserEmail,
      currentProductId: req.body.currentProductId,
    };

    const loggedInUserEmail = req.body.loggedInUserEmail;
    const currentProductId = req.body.currentProductId;

    const existingData = await likeDislikeCollection.findOne({ loggedInUserEmail, currentProductId });

    if (existingData) {
      return res.status(200).send({ message: 'Post already liked.' });
    }

    const result = await likeDislikeCollection.insertOne(clientData);

    res.status(200).send({ message: 'You Liked this course', result });
  } catch (error) {
    console.log(error);
  }
};

const dislikePost = async (req, res) => {
  try {
    console.log('hit dislike');
  } catch (error) {
    console.log(error);
  }
};

const getLikePost = async (req, res) => {
  try {
    const courseId = req.params.id;

    const sumOfAllLikes = await likeDislikeCollection
      .aggregate([
        { $match: { currentProductId: courseId } },
        { $group: { _id: null, totalLikes: { $sum: '$likes' } } },
      ])
      .toArray();

    const totalCountLikes = sumOfAllLikes[0].totalLikes;

    res.status(200).json({ totalCountLikes });
  } catch (error) {
    console.log(error);
  }
};

const deleteOnlyOneLike = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.params.email;

    const query = { currentProductId: id, loggedInUserEmail: email };
    const result = await likeDislikeCollection.deleteOne(query);
    res.status(200).send({ message: 'you dislike this post', result });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { likePost, dislikePost, getLikePost, deleteOnlyOneLike };

// const getLikePost = async (req, res) => {
//   try {
//     const currentProductId = req.params.productId;
//     console.log(currentProductId);

//     const aggregationResult = await likeDislikeCollection
//       .aggregate([
//         { $match: { currentProductId: currentProductId } }, // Match documents with the specified currentProductId
//         { $group: { _id: null, totalLikes: { $sum: '$likes' } } }, // Sum up the likes
//       ])
//       .toArray();

//     // Check if aggregation was successful and there are results
//     if (aggregationResult.length > 0) {
//       const totalLikes = aggregationResult[0].totalLikes;
//       res.status(200).json({ totalLikes });
//     } else {
//       res.status(404).send('No likes found for the specified product');
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Internal Server Error');
//   }
