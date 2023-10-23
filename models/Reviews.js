const { Schema } = require('mongoose');

const reviewSchema = new Schema({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    score: { type: Number, min: 1, max: 5, required: true },
    movieId: { type: Schema.Types.ObjectId, ref: 'Movie' },
}, { timestamps: true });

module.exports = reviewSchema;