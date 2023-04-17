const express = require("express");
const router = express.Router();
const questionRouter = require("./Question");
const answerRouter = require("./Answer");
const likesRouter = require("./Likes");
const communityRouter = require("./Community");
const CommunityQuestionsRouter = require("./CommunityQuestions");
const CommunityAnswersRouter = require("./CommunityAnswers");
const CommunitylikeRouter = require("./CommunityLikes");
const UsersRouter = require("./User");

router.get("/", (req, res) => {
  res.send("Welcome to techSpace api");
});

router.use("/question", questionRouter);
router.use("/answer", answerRouter);
router.use("/likes", likesRouter);
router.use("/community", communityRouter);
router.use("/CommunityQuestions", CommunityQuestionsRouter);
router.use("/CommunityAnswers", CommunityAnswersRouter);
router.use("/CommunityLike", CommunitylikeRouter);
router.use("/Users", UsersRouter);

module.exports = router;
