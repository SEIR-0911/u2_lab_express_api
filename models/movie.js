const { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: { type: String, required: true},
        runtime: { type: Number, required: true},
        rating: { type: Number, required: true},
        release_date: { type: Date, required: true},
        actors: [{ type: Schema.Types.ObjectId, ref: 'Actor'}],
        description: { type: String, required: true}
    },
    { timestamps: true }
)

module.exports = movieSchema