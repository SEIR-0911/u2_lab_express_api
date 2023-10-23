const { Schema } = require('mongoose');

const movieSchema = new Schema(
    {
    title: { type: String, required: true },
    runtime: { type: Number, required: true },
    rating: { type: Number, required: true },
    yearReleased: { type: Number, required: true },
    description: { type: String, required: true },
    poster: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }]
},
{ timestamps: true }
);

module.exports = movieSchema