// routes/likes.js

const express = require("express");
const router = express.Router();
const CommunityLike = require("../models/CommunityLikes");

// add a new like
router.post("/", async (req, res) => {
  try {
    const like = new CommunityLike(req.body);
    await like.save();
    res.status(201).send(like);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// check if user has already liked the post
router.get("/:postId/:userId", async (req, res) => {
  try {
    const like = await CommunityLike.findOne({
      post: req.params.post,
      user: req.params.user,
    });
    res.status(200).send({ isLiked: !!like });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

module.exports = router;
