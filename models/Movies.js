const { Schema } = require('mongoose');

const movieSchema = new Schema({
  title: { type: String, required: true },
  runtimeMins: { type: Number, required: true },
  rating: { type: Number, required: true },
  released: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true }
}, { timestamps: true });

module.exports = movieSchema;
