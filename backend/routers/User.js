const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const UsersDB = require("../models/User");

router.post("/", async (req, res) => {
  const UsersData = new UsersDB({
    user: req.body.user,
  });

  await UsersData.save()
    .then((doc) => {
      res.status(201).send({
        status: true,
        data: doc,
      });
    })
    .catch((err) => {
      res.status(400).send({
        status: false,
        message: "Error while adding User",
      });
    });
});
router.get("/", async (req, res) => {});

module.exports = router;
