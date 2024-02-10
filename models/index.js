const mongoose = require('mongoose')
const actorSchema = require('./actors')
const movieSchema = require('./movies')
const reviewSchema = require('./reviews')

const Actor = mongoose.model('Actor', actorSchema)
const Movie = mongoose.model('Movie', movieSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
   Actor,
   Movie,
   Review
}