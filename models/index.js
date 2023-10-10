const mongoose = require('mongoose')
const actorsSchema = require('./actors')
const moviesSchema = require('./movies')
const reviewsSchema = require('./reviews')

const Movies = mongoose.model('Movie', moviesSchema)
const Actors = mongoose.model('Actor', actorsSchema)
const Review = mongoose.model('Review', reviewsSchema)

module.exports = {
    Movies,
    Actors,
    Review
}