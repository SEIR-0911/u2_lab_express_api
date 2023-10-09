const { Schema } = require("mongoose");
//this connects to mongoose for this file

const ReviewSchema = new Schema(
  {
    score: { type: Number, required: true },
    comment: { type: String, required: true },
    movie: { type: Schema.Types.ObjectId, ref: "Movie._id", required: true },
  },
  { timestamps: true }
);

module.exports = ReviewSchema;
