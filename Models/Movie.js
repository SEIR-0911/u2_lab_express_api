const { Schema } = require("mongoose");
//this connects to mongoose for this file

const MovieSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    yearReleased: { type: String, required: true },
    runtime: { type: Number, required: true },
    rating: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = MovieSchema;
