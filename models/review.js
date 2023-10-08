const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const reviewSchema = new Schema (
    {
        stars: {type: Number, min: 1, max: 5},
        comment: {type: String, required: true},
        movie: {type: Schema.Types.ObjectId, ref: 'Movie'}
    },
    {timestamps: true}
)

module.exports = reviewSchema