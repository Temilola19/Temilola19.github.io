const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  user: Object,
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions",
    required: true,
  },
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
