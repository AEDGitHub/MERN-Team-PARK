const express = require("express");
const app = express();
const users = require("./routes/api/users");
const groups = require("./routes/api/groups");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);

app.use("/api/users", users);
app.use("/api/groups", groups);

app.get("/", (req, res) => res.send("Hello World"));

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
