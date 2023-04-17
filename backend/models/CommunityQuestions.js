const mongoose = require("mongoose");
const CommunityQuestionsSchema = new mongoose.Schema({
  community_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "community",
  },
  title: String,
  body: String,
  tags: [],
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

module.exports = mongoose.model("CommunityQuestions", CommunityQuestionsSchema);
