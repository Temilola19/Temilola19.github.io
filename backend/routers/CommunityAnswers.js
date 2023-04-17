const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CommunityAnswerDB = require("../models/CommunityAnswers");

router.post("/", async (req, res) => {
  const CommunityAnswerData = new CommunityAnswerDB({
    CommunityQuestion_id: req.body.CommunityQuestion_id,
    answer: req.body.answer,
    user: req.body.user,
  });

  await CommunityAnswerData.save()
    .then((doc) => {
      res.status(201).send({
        status: true,
        data: doc,
      });
    })
    .catch((err) => {
      res.status(400).send({
        status: false,
        message: "Error while adding answer",
      });
    });
});
router.get("/", async (req, res) => {});

module.exports = router;
