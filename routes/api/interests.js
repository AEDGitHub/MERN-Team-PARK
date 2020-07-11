const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Interest = require("../../models/Interest");
const validateInterestInput = require("../../validation/interest-input");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Interest.find()
      .sort({ date: -1 })
      .then((interests) => res.json(interests))
      .catch((err) =>
        res.status(404).json({ nointerestsfound: "No interests found" })
      );
  }
);

//Create user interest
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateInterestInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const user = await User.findOne({ _id: req.user.id });
    const newInterest = new Interest({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      owner: user,
    });

    user.interests.push(newInterest);
    newInterest.users.push(user);

    newInterest
      .save()
      .then((interest) => {
        user
          .save()
          .then((savedUser) => {
            savedUser.populate("interests", () => res.json(savedUser));
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        return res.status(422).json({
          error:
            "An error occured while creating the interest. Please try again.",
        });
      });
  }
);

//Follow another user's interest
router.post(
  "/:id/follow",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const interest = await Interest.findOne({ _id: req.params.id });
    const interestCreator = await User.findOne({ _id: interest.owner });
    const follower = await User.findOne({ _id: req.user.id });

    interest.users.push(follower);

    interest
      .save()
      .then((interest) =>
        interestCreator
          .save()
          .then((savedUser) => {
            savedUser.populate("interests", () => res.json(savedUser));
          })
          .catch((err) =>
            res.status(422).json({ error: "User could not follow interest" })
          )
      )
      .catch((err) => {
        return res.status(422).json({ error: "Error in joining interest" });
      });
  }
);

//Update your interest
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateInterestInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const interest = await Interest.findOne({ _id: req.params.id });
    if (interest.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Unauthorized to edit interest" });
    }

    const { name, description, category } = req.body;
    if (name) interest.name = name;
    if (description) interest.description = description;
    if (category) interest.category = category;

    interest.save().then((interest) => res.json(interest));
  }
);

module.exports = router;
