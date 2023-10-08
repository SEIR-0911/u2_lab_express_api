const mongoose = require('mongoose')
const movieSchema = require('./movies')
const actorSchema = require('./actors')
const reviewSchema = require('./reviews')

const Movie = mongoose.model('movies', movieSchema)
const Actor = mongoose.model('actors', actorSchema)
const Review = mongoose.model('reviews', reviewSchema)

module.exports = {
    Movie,
    Actor,
    Review
}