// Schedule Model

const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema(
  {
    match: { type: String, required: true },
    venue: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

const Schedule = new mongoose.model("schedule", scheduleSchema);

module.exports = Schedule;
