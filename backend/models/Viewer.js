const mongoose = require("mongoose");
const Film = require("./Film");

const NezoSchema = new mongoose.Schema(
  {
    nev: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    films: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "film",
      },
    ],
  },
  { timestamps: true }
);

const Viewer = mongoose.model("viewer", NezoSchema);

module.exports = Viewer;
