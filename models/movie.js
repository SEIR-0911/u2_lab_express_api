const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Movie = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        yearReleased: {type: Number, required: true},
        runTime: { type: Number, required: true },
        rating: { type: String, required: true },
        genre: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)