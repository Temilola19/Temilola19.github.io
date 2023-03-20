const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Questions", questionSchema);
