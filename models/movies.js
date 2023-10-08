const { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        runtimeInMins: { type: Number, required: true },
        rating: { type: String, required: true },
        releaseDate: { type: String, required: true },
        briefDescription: { type: String, required: true },
        image: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = movieSchema