const mongoose = require('mongoose')
const actorSchema = require('./actor')
const movieSchema = require('./movie')
const reviewSchema = require('./review')

const Actor = mongoose.model('actors', actorSchema)
const Movie = mongoose.model('movies', movieSchema)
const Review = mongoose.model('reviews', reviewSchema)

module.exports = {
  Actor,
  Movie,
  Review
}
