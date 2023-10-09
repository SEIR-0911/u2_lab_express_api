const { Schema } = require('mongoose');

const Review = new Schema(
    {
        rev_id: { type: Number, required: true },
        email: { type: String, required: true },
        score: { type: Number, required: true },
        date: { type: Date, required: true },
        description: { type: String }
    },
    { timestamps: true }
);

module.exports = Review;