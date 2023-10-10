const mongoose = require('mongoose')
const actorSchema = require('./actor')
const movieSchema = require('./movie')
const reviewSchema = require('./review')

const Review = mongoose.model('reviews', reviewSchema)
const Movie = mongoose.model('movies', movieSchema)
const Actor = mongoose.model('actors', actorSchema)

module.exports = {
    Movie,
    Actor,
    Review
  }