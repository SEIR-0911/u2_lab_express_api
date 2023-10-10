const { Schema } = require('mongoose');

const Review = new Schema(
    {
        email: { type: String, required: true },
        score: { type: Number, required: true },
        date: { type: Date, required: true },
        description: { type: String }
    },
    { timestamps: true }
);

module.exports = Review;