const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Group = require("../../models/Group");

const validateGroupInput = require("../../validation/groups");
const generateSlug = require("../../util/group_util");
const User = require("../../models/User");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateGroupInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newGroup = new Group({
      name: req.body.name,
      slug: generateSlug(req.body.name),
    });

    const user = await User.findOne({ _id: req.user.id }).populate("interests");

    newGroup.owner = req.user;
    newGroup.users.push(req.user);
    newGroup
      .save()
      .then((group) => {
        user.groups.push(group._id);
        user.save().then(() => res.json({ group: group, user: user }));
      })
      .catch((err) => res.status(422).json({ error: "Group name is taken" }));
  }
);
//Get all groups
router.get("/", (req, res) => {
  Group.find()
    .populate("users")
    .populate("interests")
    .sort({ date: -1 })
    .then((groups) => res.json(groups))
    .catch((err) => res.status(404).json({ nogroupsfound: "No groups found" }));
});

//Get a specific group
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const group = await Group.findOne({ _id: req.params.id });
    const users = await User.find({ groups: { $in: [group._id] } }).populate(
      "interests"
    );

    res.json({ group, users });
  }
);

//Joining Group by Slug
router.post(
  "/:slug/join",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const group = await Group.findOne({ slug: req.params.slug });
    const user = await User.findOne({ _id: req.user.id }).populate("interests");

    if (group.users.includes(req.user.id)) {
      return res
        .status(422)
        .json({ error: "You're already a member of this group" });
    }

    if (group.users.length >= group.maxCapacity) {
      return res.status(422).json({
        error: "Group is at max capacity",
      });
    }

    group.users.push(user._id);
    user.groups.push(group._id);

    group
      .save()
      .then((group) =>
        user
          .save()
          .then((user) => res.json({ user: user, group: group }))
          .catch((err) =>
            res.status(422).json({ error: "User could not join group" })
          )
      )
      .catch((err) => {
        return res.status(422).json({ error: "Error in joining group" });
      });
  }
);

module.exports = router;
