const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 8000;

const posts = [
  {
    id: 01,
    name: "test",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/login", (req, res) => {
  //Authentication
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
