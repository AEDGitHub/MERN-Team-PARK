const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const Group = require("../../models/Group");
const keys = require("../../config/keys");
const passport = require("passport");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateUserUpdateInput = require("../../validation/user-update");
module.exports = router;

router.post("/register", async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  let group = null; // make sure we dont find a group with a null slug
  if (req.body.slug) {
    group = await Group.findOne({ slug: req.body.slug });
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });

      if (group) {
        group.users.push(newUser);
        newUser.groups.push(group);

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                group
                  .save()
                  .then(() => {
                    const payload = { id: user.id, email: user.email };
                    jwt.sign(
                      payload,
                      keys.secretOrKey,
                      { expiresIn: 3600 },
                      (err, token) => {
                        res.json({
                          success: true,
                          token: "Bearer " + token,
                        });
                      }
                    );
                  })
                  .catch((err) => {
                    throw err;
                  });
              })
              .catch((err) => console.log(err));
          });
        });
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                const payload = { id: user.id, email: user.email };
                jwt.sign(
                  payload,
                  keys.secretOrKey,
                  { expiresIn: 3600 },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token,
                    });
                  }
                );
              })
              .catch((err) => console.log(err));
          });
        });
      }
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .select("password")
    .then((user) => {
      if (!user) {
        errors.email = "This user does not exist";
        return res.status(400).json(errors);
      }

      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = { id: user.id, email: user.email };

          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
              });
            }
          );
        } else {
          errors.password = "Incorrect password";
          return res.status(400).json(errors);
        }
      });
    });
});

//Get the current user
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const user = await User.findOne({ _id: req.user.id })
      .populate("interests")
      .populate("events");
    res.json(user);
  }
);

//Get a specific user
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const user = await User.findOne({ _id: req.params.id })
      .populate("interests")
      .populate("events");
    res.json(user);
  }
);

//Get any user's groups (and return only group name information)
router.get(
  "/:id/groups",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const user = await User.findOne({ _id: req.params.id }).populate(
      "groups",
      "name"
    );
    res.json(user.groups);
  }
);

//Get a user's created events
router.get(
  "/:id/owned_events",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const user = await User.findOne({ _id: req.params.id }).populate(
      "ownedEvents"
    );
    res.json(user.ownedEvents);
  }
);
//Get a user's events (attending)
router.get(
  "/:id/events",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const user = await User.findOne({ _id: req.params.id }).populate("events");
    res.json(user.events);
  }
);

// Get all events associated to a user

//Edit user
router.patch(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  async function (req, res, next) {
    const { errors, isValid } = validateUserUpdateInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const user = await User.findOne({ _id: req.user.id });

    const { firstName, lastName, email, groupId } = req.body;
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;

    user.save();
    return res.json(user);
  }
);
