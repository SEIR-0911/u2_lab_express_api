const mongoose = require('mongoose')

const actorsSchema = require('./actors')
const moviesSchema = require('./movies')
const reviewsSchema = require('./reviews')

const Actor = mongoose.model('actors', actorsSchema)
const Movie = mongoose.model('movies', moviesSchema)
const Review = mongoose.model('reviews', reviewsSchema)

module.exports = {
    Actor,
    Movie,
    Review
}