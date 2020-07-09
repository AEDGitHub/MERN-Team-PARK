const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
      index: true,
    },
    details: {
      type: String,
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);
// add interest, invitees, max number(optional)
module.exports = Event = mongoose.model("Event", EventSchema);
