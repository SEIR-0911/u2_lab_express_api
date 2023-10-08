const { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        userName: { type: String, required: true },
        comment: { type: String, required: true },
        score: { type: Number, min: 1, max: 10, required: true },
        movieId: { type: Schema.Types.ObjectId, ref: 'Movie'}
    },
    { timestamps: true }
)

module.exports = reviewSchema