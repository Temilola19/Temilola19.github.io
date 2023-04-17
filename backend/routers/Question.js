const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const QuestionDB = require("../models/Question");

router.post("/", async (req, res) => {
  const questionData = new QuestionDB({
    title: req.body.title,
    body: req.body.body,
    tags: req.body.tag,
    user: req.body.user,
  });

  await questionData
    .save()
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
  QuestionDB.aggregate([
    {
      $lookup: {
        from: "answers",
        let: { question_id: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$question_id", "$$question_id"],
              },
            },
          },
          {
            $project: {
              _id: 1,
              // user_id: 1,
              // answer: 1,
              // created_at: 1,
              question_id: 1,
              // created_at: 1,
            },
          },
        ],
        as: "answerDetails",
      },
    },
    {
      $lookup: {
        from: "likes",
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
        as: "likes",
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
    .then((questionDetails) => {
      res.status(200).send(questionDetails);
    })
    .catch((e) => {
      console.log("Error: ", e);
      res.status(400).send(e);
    });
});

router.get("/:id", async (req, res) => {
  try {
    QuestionDB.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "answers",
          let: { question_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$question_id", "$$question_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                user: 1,
                answer: 1,
                // created_at:1,
                question_id: 1,
                created_at: 1,
              },
            },
          ],
          as: "answerDetails",
        },
      },
      {
        $lookup: {
          from: "likes",
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
          as: "likes",
        },
      },
      {
        $project: {
          __v: 0,
        },
      },
    ])
      .exec()
      .then((questionDetails) => {
        res.status(200).send(questionDetails);
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

router.get("/user/:userId", async (req, res) => {
  try {
    const questions = await QuestionDB.find({
      user: req.params.user,
    });
    res.status(200).send(questions);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "user not found",
    });
  }
});

module.exports = router;
