const { Schema } = require('mongoose')

const movieSchema = new Schema({
    title: { type: String, required: true},
    runtime: { type: Number, required: true },
    rating: { type: Number, required: true},
    yearReleased: { type: Number, required: true},
    description: { type: String, required: true},
    image: { type: String, required: true}
}, {timestamps: true}
)

module.exports = movieSchema