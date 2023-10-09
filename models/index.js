const mongoose = require('mongoose')

const actorsSchema = require('actors.js')
const moviesSchema = require('movies.js')
const reviewsSchema = require('reviews.js')

const Actor = mongoose.model('actors', actorsSchema)
const Movie = mongoose.model('movies', moviesSchema)
const Review = mongoose.model('reviews', reviewsSchema)

module.exports = {
    Actor,
    Movie,
    Review
}