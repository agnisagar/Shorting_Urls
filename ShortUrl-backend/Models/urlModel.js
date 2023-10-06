const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema(
  {
    redirectUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    visitHistory: [{ timestamps: { type: Number } }],
  },
  {
    timestamps: true,
  }
);
const urlModel = mongoose.model("urls", urlSchema);
module.exports = urlModel;
