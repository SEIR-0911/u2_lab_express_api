const { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        movie: { type: String, required: true },
        score: { type: Number, required: true },
        comment: { type: String, required: true },
        movie_id: { type: Schema.Types.ObjectId, ref: 'Movie' }
    },
    { timestamps: true }
)

module.exports = reviewSchema