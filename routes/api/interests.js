const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Interest = require("../../models/Interest");

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

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // TODO: const { errors, isValid } = validateInterestInput(req.body);
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
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
          .then((user) => res.json(interest))
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        console.log(err);
        return res.status(422).json({
          error:
            "An error occured while creating the interest. Please try again.",
        });
      });
  }
);

router.post(
  "/:id/follow",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const interest = await Interest.findOne({ _id: req.params.id });
    const user = await User.findOne({ _id: req.user.id });

    interest.users.push(user);
    user.interests.push(interest);

    interest
      .save()
      .then((interest) =>
        user
          .save()
          .then((user) => res.json({ user, interest }))
          .catch((err) =>
            res.status(422).json({ error: "User could not follow interest" })
          )
      )
      .catch((err) => {
        console.log(err);
        return res.status(422).json({ error: "Error in joining interest" });
      });
  }
);

module.exports = router;
