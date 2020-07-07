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
      owner: req.user.id,
      name: req.body.name,
      slug: generateSlug(req.body.name),
    });

    // TODO: add user to group (group creator should automatically be a member of the group)

    newGroup
      .save()
      .then((group) => res.json(group))
      .catch((err) => res.status(422).json({ error: "Group name is taken" }));
  }
);

router.get("/", (req, res) => {
  Group.find()
    .sort({ date: -1 })
    .then((groups) => res.json(groups))
    .catch((err) => res.status(404).json({ nogroupsfound: "No groups found" }));
});

module.exports = router;
