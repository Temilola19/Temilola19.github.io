const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CommunityDB = require("../models/Community");

router.post("/", async (req, res) => {
  const CommunityData = new CommunityDB({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    user: req.body.user,
    members: req.body.members,
  });

  await CommunityData.save()
    .then((doc) => {
      res.status(201).send(doc);
    })
    .catch((err) => {
      res.status(400).send({
        status: false,
        message: "Error adding community",
      });
    });
});

router.get("/", async (req, res) => {
  CommunityDB.aggregate([
    {
      $lookup: {
        from: "CommunityQuestions",
        let: { community_id: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$community_id", "$$community_id"],
              },
            },
          },
          {
            $project: {
              _id: 1,
              // user_id: 1,
              // answer: 1,
              // created_at: 1,
              community_id: 1,
              // created_at: 1,
            },
          },
        ],
        as: "communityQuestionsDetails",
      },
    },
    // {
    //   $lookup: {
    //     from: "likes",
    //     let: { post: "$_id" },
    //     pipeline: [
    //       {
    //         $match: {
    //           $expr: {
    //             $eq: ["$post", "$$post"],
    //           },
    //         },
    //       },
    //       {
    //         $project: {
    //           _id: 1,
    //           post: 1,
    //           user: 1,
    //           //comment: 1,
    //           // created_at: 1,
    //           // question_id: 1,
    //           //created_at: 1,
    //         },
    //       },
    //     ],
    //     as: "likes",
    //   },
    // },
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
    .then((communityDetails) => {
      res.status(200).send(communityDetails);
    })
    .catch((e) => {
      console.log("Error: ", e);
      res.status(400).send(e);
    });
});

router.get("/:id", async (req, res) => {
  try {
    CommunityDB.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "CommunityQuestions",
          let: { community_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$community_id", "$$community_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                user: 1,
                image: 1,
                CommunityQuestions: 1,
                // created_at:1,
                community_id: 1,
                created_at: 1,
              },
            },
          ],
          as: "communityQuestionsDetails",
        },
      },
      //   {
      //     $lookup: {
      //       from: "likes",
      //       let: { post: "$_id" },
      //       pipeline: [
      //         {
      //           $match: {
      //             $expr: {
      //               $eq: ["$post", "$$post"],
      //             },
      //           },
      //         },
      //         {
      //           $project: {
      //             _id: 1,
      //             post: 1,
      //             user: 1,
      //             //comment: 1,
      //             // created_at: 1,
      //             // question_id: 1,
      //             //created_at: 1,
      //           },
      //         },
      //       ],
      //       as: "likes",
      //     },
      //   },
      {
        $project: {
          __v: 0,
        },
      },
    ])
      .exec()
      .then((communityDetails) => {
        res.status(200).send(communityDetails);
      })
      .catch((e) => {
        console.log("Error: ", e);
        res.status(400).send(e);
      });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: "Community not found",
    });
  }
});

module.exports = router;
