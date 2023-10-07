const  { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        runMin: { type: Number, required: true },
        rating: { type: Number, required: true },
        releaseYear: { type: Number, required: true },
        description: { type: String, required: true },
        actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }],
        reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
        posterURL: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = movieSchema
