const mongoose = require("mongoose");

const CommunitylikeSchema = new mongoose.Schema({
  user: Object,
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CommunityQuestions",
    required: true,
  },
});

const CommunityLike = mongoose.model("CommunityLike", CommunitylikeSchema);

module.exports = CommunityLike;
