const mongoose = require("mongoose");
const CommunitySchema = new mongoose.Schema({
  name: String,
  description: String,
  image: Object,
  created_at: {
    type: Date,
    default: Date.now,
  },
  user: Object,
  members: [{ Object }],
  // users: [
  //   {
  //     // type: mongoose.Schema.Types.ObjectId,
  //     // ref: "User",
  //     Object,
  //   },
  // ],
  //   comment_id: {
  //     type: mongoose.Schema.Schema.Types.Objectid,
  //     ref: "Comments",
  //   },
});

module.exports = mongoose.model("community", CommunitySchema);
