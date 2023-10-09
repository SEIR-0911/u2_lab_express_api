const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        runtimeInMins: { type: Number, required: true },
        rating: { type: String, required: true },
        yearReleased: { type: Number, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Movie', movieSchema)