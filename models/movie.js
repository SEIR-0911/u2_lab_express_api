const { Schema } = require('mongoose');

const Movie = new Schema(
    {
        title: { type: String, required: true },
        runtime: { type: Number, required: true },
        rating: { type: String, required: true },
        actors: { type: Array, required: true, ref: 'Actor' },//This references the 'Actor' model
        released: { type: Date },
        description: { type: String },
        url: { type: String },
        reviews: { type: Array, ref: 'Review' },//This references the 'Reveiw' model
    },
    { timestamps: true }
);

module.exports = Movie;