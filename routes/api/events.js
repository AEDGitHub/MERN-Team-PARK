const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Event = require("../../models/Event");
const validateEventInput = require("../../validation/event-input");
const Interest = require("../../models/Interest");
const User = require("../../models/User");
const Group = require("../../models/Group");

//Get all events
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Event.find()
      .sort({ date: -1 })
      .then((events) => res.json(events))
      .catch((err) =>
        res.status(404).json({ noeventsfound: "No events found" })
      );
  }
);

//Create events
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newEvent = new Event({
      name: req.body.name,
      owner: req.user.id,
      date: req.body.date,
      location: req.body.location,
      details: req.body.details,
      group: req.body.groupId,
      maxCapcity: req.body.maxCapacity,
      attendees: [req.user.id],
      interest: req.body.interestId,
      invitees: [req.user.id],
      //invitees: [req.user.id] && user.invitedEvents.push(event) add event creator to the invited list + invitees
    });

    const user = await User.findOne({ _id: req.user.id });
    const group = await Group.findOne({ _id: req.body.groupId });
    const interest = await Interest.findOne({ _id: req.body.interestId });

    newEvent.invitees.push(interest.users);
    newEvent
      .save()
      .then((event) => {
        user.ownedEvents.push(event);
        user.confirmedEvents.push(event);
        user.invitedEvents.push(event);
        user
          .save()
          .then((user) => {
            group.events.push(event);
            group
              .save()
              .then(() => {
                res.json(event);
              })
              .catch((err) =>
                res.status(422).json({ error: "Could not save event to group" })
              );
          })
          .catch((err) =>
            res.status(422).json({ error: "Could not save user to event" })
          );
      })
      .catch((err) => {
        return res.status(422).json({ error: "Could not save event" });
      });
  }
);

//Join event (current user)
router.post(
  "/:id/join",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const event = await Event.findOne({ _id: req.params.id });
    const user = await User.findOne({ _id: req.user.id });

    if (event.attendees.includes(req.user.id)) {
      return res
        .status(422)
        .json({ error: "User is already confirmed for this event" });
    }

    if (event.attendees.length >= event.maxCapacity) {
      return res.status(422).json({ error: "Event is at max capacity" });
    }

    if (!user.groups.includes(event.group)) {
      return res
        .status(422)
        .json({ error: "User must be part of group to join event" });
    }

    event.attendees.push(req.user.id);
    event
      .save()
      .then((event) => {
        user.confirmedEvents.push(event);
        user
          .save()
          .then((user) => {
            res.json({ event, user });
          })
          .catch((err) =>
            res.status(422).json({
              error: "Could not save event to user's confirmed events",
            })
          );
      })
      .catch((err) => res.status(422).json({ error: "Could not join event" }));
  }
);

//Edit event
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const event = await Event.findOne({ _id: req.params.id });
    if (event.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Unauthorized to edit event" });
    }

    const { name, date, location, details, maxCapacity } = req.body;
    if (name) event.name = name;
    if (date) event.date = date;
    if (location) event.location = location;
    if (details) event.details = details;
    if (maxCapacity) event.maxCapacity = maxCapacity;

    event.save().then((event) => res.json(event));
  }
);
module.exports = router;
