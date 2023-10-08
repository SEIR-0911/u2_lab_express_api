const mongoose = require('mongoose')
//GET SCHEMA FROM MONGOOSE LIBRARY
const {Schema} = require('mongoose')

//MOVIE SCHEMA MODEL
const movieSchema = new Schema(
    {
        title:  {type: String, required: true},
        runtimeMins: {type: Number, required: true},
        rating: {type: String, required: true},
        releaseYear: {type: Number, required: true},
        desc: {type: String, required: true},
        actors: [],
        image: {type: String}
    },
    {
        timestamps: true
    },
)

//CREATE 'Movie' COLLECTION IN DB & EXPORT.
module.exports = mongoose.model('Movie', movieSchema)