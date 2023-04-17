const mongoose = require("mongoose");
const CommunityAnswersSchema = new mongoose.Schema({
  CommunityQuestion_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CommunityQuestions",
  },
  answer: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  user: Object,
  //   comment_id: {
  //     type: mongoose.Schema.Schema.Types.Objectid,
  //     ref: "Comments",
  //   },
});

module.exports = mongoose.model("CommunityAnswers", CommunityAnswersSchema);
