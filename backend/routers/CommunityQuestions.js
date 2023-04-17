const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CommunityQuestionDB = require("../models/CommunityQuestions");

router.post("/", async (req, res) => {
  const CommunityQuestionData = new CommunityQuestionDB({
    title: req.body.title,
    body: req.body.body,
    tags: req.body.tag,
    user: req.body.user,
  });

  await CommunityQuestionData.save()
    .then((doc) => {
      res.status(201).send(doc);
    })
    .catch((err) => {
      res.status(400).send({
        status: false,
        message: "Error adding question",
      });
    });
});

router.get("/", async (req, res) => {
  CommunityQuestionDB.aggregate([
    {
      $lookup: {
        from: "CommunityAnswers",
        let: { CommunityQuestion_id: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$ CommunityQuestion_id", "$$ CommunityQuestion_id"],
              },
            },
          },
          {
            $project: {
              _id: 1,
              // user_id: 1,
              // answer: 1,
              // created_at: 1,
              CommunityQuestion_id: 1,
              // created_at: 1,
            },
          },
        ],
        as: "CommunityAnswersDetails",
      },
    },
    {
      $lookup: {
        from: "CommunityLike",
        let: { post: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$post", "$$post"],
              },
            },
          },
          {
            $project: {
              _id: 1,
              post: 1,
              user: 1,
              //comment: 1,
              // created_at: 1,
              // question_id: 1,
              //created_at: 1,
            },
          },
        ],
        as: "CommunityLike",
      },
    },
    //   {
    //       $unwind: {
    //           path: "$answerDetails",
    //           preserveNullAndEmptyArrays: true,
    //       },
    //   },
    {
      $project: {
        __v: 0,
        //   _id: "$_id",
        //   answerDetails: {$first: "$answerDetails"},
      },
    },
  ])
    .exec()
    .then((CommunityQuestionDetails) => {
      res.status(200).send(CommunityQuestionDetails);
    })
    .catch((e) => {
      console.log("Error: ", e);
      res.status(400).send(e);
    });
});

router.get("/:id", async (req, res) => {
  try {
    CommunityQuestionDB.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "CommunityAnswers",
          let: { CommunityQuestion_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$CommunityQuestion_id", "$$CommunityQuestion_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                user: 1,
                answer: 1,
                // created_at:1,
                CommunityQuestion_id: 1,
                created_at: 1,
              },
            },
          ],
          as: "CommunityAnswersDetails",
        },
      },
      {
        $lookup: {
          from: "CommunityLike",
          let: { post: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$post", "$$post"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                post: 1,
                user: 1,
                //comment: 1,
                // created_at: 1,
                // question_id: 1,
                //created_at: 1,
              },
            },
          ],
          as: "CommunityLike",
        },
      },
      {
        $project: {
          __v: 0,
        },
      },
    ])
      .exec()
      .then((CommunityQuestionDetails) => {
        res.status(200).send(CommunityQuestionDetails);
      })
      .catch((e) => {
        console.log("Error: ", e);
        res.status(400).send(e);
      });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: "question not found",
    });
  }
});

module.exports = router;
