const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Group = require("../../models/Group");

const validateGroupInput = require("../../validation/groups");
const generateSlug = require("../../util/group_util");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateGroupInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newGroup = new Group({
      name: req.body.name,
      slug: generateSlug(req.body.name),
    });

    newGroup.owner = req.user;
    newGroup.users.push(req.user);

    newGroup
      .save()
      .then((group) => res.json(group))
      .catch((err) => res.status(422).json({ error: "Group name is taken" }));
  }
);

router.get("/", (req, res) => {
  Group.find()
    .populate("users")
    .sort({ date: -1 })
    .then((groups) => res.json(groups))
    .catch((err) => res.status(404).json({ nogroupsfound: "No groups found" }));
});

//Joining Group by Slug
router.post(
  "/:slug/join",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const group = await Group.findOne({ slug: req.params.slug });
    const user = await User.findOne({ _id: req.user.id });

    group.users.push(user);
    user.groups.push(group);

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
        console.log(err);
        return res.status(422).json({ error: "Error in joining group" });
      });
    // group.save(function (err) {
    //   if (err) return err;
    //   user.save(function (err) {
    //     if (err) return err;
    //     return res.json({ user: user, group: group });
    //   });
    // });
  }
);

module.exports = router;
