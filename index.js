const app = require("express")();
const axios = require("axios");
const _ = require("lodash");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/posts", async (req, res) => {
  const { topic } = req.query;

  // Fetch posts on topic
  const result = await axios.get(
    `https://medium.com/topic/${topic}?format=json`
  );

  // Format json
  const data = JSON.parse(result.data.substring(16, result.data.length));

  const { references } = data.payload;

  // Get users from posts
  const users = Object.values(references.User);

  // Get posts with extended data like post-link and author
  const posts = Object.values(references.Post).map(post => {
    const user = _.find(users, ["userId", post.creatorId]);
    const link = `https://medium.com/@${user.username}/${post.uniqueSlug}`;

    return { ...post, linkToPost: link, author: user };
  });

  // Return posts
  res.send({ posts });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
