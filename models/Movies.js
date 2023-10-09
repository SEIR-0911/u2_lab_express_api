// create schemas for Actors/Movies/Reviews
const { Schema } = require('mongoose')
const actorsSchema = require('./Actors')
const reviewsSchema = require('./Reviews')

const moviesSchema = new Schema(
    {
        title: { type: String, required: true },
        runtime: { type: Number, required: true},
        rating: { type: Number, required: true},
        year_released: { type: Number, required: true}
    }
)

const Actor = mongoose.model('Actor', actorsSchema)
const Review = mongoose.model('Review', reviewsSchema)
const Movie = mongoose.model('Movie', moviesSchema)

// make this the parent

module.exports = {
    Actor,
    Review,

}