// routes/quests.js

const express = require("express");
const moment = require("moment");
const Quest = require("../models/Quest");

const router = express.Router();

router.get("/daily-quests", async (req, res) => {
  const today = moment().startOf("day");
  const quests = await Quest.find({ dueDate: today });
  res.json(quests);
});

module.exports = router;
