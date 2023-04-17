const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  user: Object,
  //   comment_id: {
  //     type: mongoose.Schema.Schema.Types.Objectid,
  //     ref: "Comments",
  //   },
});

module.exports = mongoose.model("users", UserSchema);
