const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    groups: [{ type: Schema.Types.ObjectId, ref: "Group" }],
    interests: [{ type: Schema.Types.ObjectId, ref: "Interest" }],
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("User", UserSchema);
