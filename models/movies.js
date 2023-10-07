const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        runtime: { type: String, required: true },
        yearReleased: { type: String, required: true },
        description: {type: String, required: true},
        actors: {type: Schema.Types.ObjectId, ref: 'Actor'},
        reviews: {type: Schema.Types.ObjectId, ref: 'Review'},
    },
    { timestamps: true }
)

module.exports = mongoose.model('Movie', movieSchema)