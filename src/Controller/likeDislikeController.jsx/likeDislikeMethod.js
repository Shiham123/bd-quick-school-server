const { likeCollection, dislikeCollection } = require('../../DatabaseConfig/Db');

const likePost = async (req, res) => {
  try {
    const clientData = {
      likes: 1,
      loggedInUserEmail: req.body.loggedInUserEmail,
      currentProductId: req.body.currentProductId,
    };

    const loggedInUserEmail = req.body.loggedInUserEmail;
    const currentProductId = req.body.currentProductId;

    const existingData = await likeCollection.findOne({ loggedInUserEmail, currentProductId });

    if (existingData) {
      return res.status(200).send({ message: 'Post already liked.' });
    }

    const result = await likeCollection.insertOne(clientData);

    res.status(200).send({ message: 'You Liked this course', result });
  } catch (error) {
    console.log(error);
  }
};

const dislikePost = async (req, res) => {
  const clientData = {
    dislike: 1,
    loggedInUserEmail: req.body.loggedInUserEmail,
    currentProductId: req.body.currentProductId,
  };

  const loggedInUserEmail = req.body.loggedInUserEmail;
  const currentProductId = req.body.currentProductId;

  const existingData = await dislikeCollection.findOne({ loggedInUserEmail, currentProductId });

  if (existingData) {
    return res.status(400).send({ message: 'Disliked already' });
  }

  const result = await dislikeCollection.insertOne(clientData);
  res.status(200).send({ message: 'you disliked post', result });
};

const getLikePost = async (req, res) => {
  try {
    const courseId = req.params.id;

    const sumOfAllLikes = await likeCollection
      .aggregate([
        { $match: { currentProductId: courseId } },
        { $group: { _id: null, totalLikes: { $sum: '$likes' } } },
      ])
      .toArray();

    let totalCountLikes = 0;

    if (sumOfAllLikes.length > 0) {
      totalCountLikes = sumOfAllLikes[0].totalLikes;
    }

    res.status(200).json({ totalCountLikes });
  } catch (error) {
    console.log(error);
  }
};

const getDislikePost = async (req, res) => {
  try {
    const courseId = req.params.id;
    const sumOfAllDislikes = await dislikeCollection
      .aggregate([
        { $match: { currentProductId: courseId } },
        { $group: { _id: null, totalDislikes: { $sum: '$dislike' } } },
      ])
      .toArray();

    let totalCountDislike = 0;
    if (sumOfAllDislikes.length > 0) {
      totalCountDislike = sumOfAllDislikes[0].totalDislikes;
    }

    res.status(200).json({ totalCountDislike });
  } catch (error) {
    console.log(error);
  }
};

const deleteOnlyOneLike = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.params.email;

    const query = { currentProductId: id, loggedInUserEmail: email };
    const result = await likeCollection.deleteOne(query);
    res.status(200).send({ message: 'you undo your like', result });
  } catch (error) {
    console.log(error);
  }
};

const deleteOnlyOneDislike = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.params.email;

    const query = { currentProductId: id, loggedInUserEmail: email };

    const existingData = await dislikeCollection.findOne(query);

    if (existingData) {
      const result = await dislikeCollection.deleteOne(query);
      return res.status(200).send({ message: 'you undo your like', result });
    } else {
      res.status(400).send({ message: 'item not found' });
    }
  } catch (error) {
    console.log(error);
  }
};

const verifyLikeByEmailAndId = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.params.email;

    const exitsData = await likeCollection.findOne({ loggedInUserEmail: email, currentProductId: id });

    if (exitsData) {
      return res.status(200).send({ likeStatus: true });
    } else {
      return res.status(200).send({ likeStatus: false });
    }
  } catch (error) {
    console.log(error);
  }
};

const verifyDislikeByEmailAndId = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.params.email;

    const exitsData = await dislikeCollection.findOne({ loggedInUserEmail: email, currentProductId: id });

    if (exitsData) {
      return res.status(200).send({ dislikeStatus: true });
    } else {
      return res.status(200).send({ dislikeStatus: false });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  likePost,
  dislikePost,
  getLikePost,
  getDislikePost,
  deleteOnlyOneLike,
  deleteOnlyOneDislike,
  verifyLikeByEmailAndId,
  verifyDislikeByEmailAndId,
};

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
