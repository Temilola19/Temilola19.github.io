const express = require("express");
const router = express.Router();
const questionRouter = require("./Question");
const answerRouter = require("./Answer");
const likesRouter = require("./Likes");
//const communityRouter = require("./Community");

router.get("/", (req, res) => {
  res.send("Welcome to techSpace api");
});

router.use("/question", questionRouter);
router.use("/answer", answerRouter);
router.use("/likes", likesRouter);
// router.use("/community", communityRouter);

module.exports = router;
