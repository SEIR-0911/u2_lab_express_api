
const { Schema } = require('mongoose')

const reviewsSchema = new Schema(
    {
        moviesName: { type: Schema.Types.ObjectId, ref: 'Movie' },
        score: { type: Number, required: true },
        comment: { type: String, required: true }
    }
)

module.exports = reviewsSchema