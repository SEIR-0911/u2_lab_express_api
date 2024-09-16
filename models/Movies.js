// create schemas for Actors/Movies/Reviews
const { Schema } = require('mongoose')

const moviesSchema = new Schema(
    {
        id: { type: Number, required: true },
        title: { type: String, required: true },
        runtime: { type: Number, required: true},
        rating: { type: Number, required: true},
        yearReleased: { type: Number, required: true},
        movieImage: {type: String, required: true }
    }
)

module.exports = moviesSchema