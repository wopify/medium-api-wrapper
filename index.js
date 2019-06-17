const app = require("express")();
const axios = require("axios");
const Promise = require("bluebird");
const _ = require("lodash");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/posts", async (req, res) => {
  const validFields = [
    "topic",
    "topic2",
    "topic3",
    "topic4",
    "topic5",
    "topic6",
    "topic7",
    "topic8",
    "topic9",
    "topic10"
  ];
  const topicsObj = _.pick(req.query, validFields);
  const topics = Object.values(topicsObj);

  const promises = topics.map(async topic => {
    return await axios.get(`https://medium.com/topic/${topic}?format=json`);
  });

  const posts = await Promise.all(promises)
    .then(res => {
      const resultArr = Object.values(res);

      const postsByTopic = {};
      resultArr.forEach(resultObj => {
        const fullTopic = resultObj.data;
        const parsedTopic = JSON.parse(
          fullTopic.substring(16, fullTopic.length)
        );

        const { references, topic } = parsedTopic.payload;

        // Get users from posts
        const users = Object.values(references.User);

        // Get posts with extended data like post-link and author
        postsByTopic[topic.slug] = Object.values(references.Post)
          .map(post => {
            const user = _.find(users, ["userId", post.creatorId]);
            const link = `https://medium.com/@${user.username}/${
              post.uniqueSlug
            }`;

            return { ...post, linkToPost: link, author: user };
          })
          .sort((a, b) => b.createdAt - a.createdAt);
      });

      return postsByTopic;
    })
    .catch(err => console.log({ err }));

  res.send({ posts });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
