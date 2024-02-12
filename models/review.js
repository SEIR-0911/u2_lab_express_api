const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Review = new Schema(
    {
        score: { type: Number, min: 0, max: 10, required: true },
        comment: { type: String, required: true },
        movieId: { type:Schema.Types.ObjectId, ref: 'Movie' }
    },
    { timestamps: true },
)

module.exports = mongoose.model('review', Review)