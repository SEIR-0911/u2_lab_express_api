// create schemas for Actors/Movies/Reviews
const { Schema } = require('mongoose')

const reviewsSchema = new Schema(
    {
        score: { type: Number, required: true },
        comment: { type: String, required: true }
    }
)

module.exports = reviewsSchema