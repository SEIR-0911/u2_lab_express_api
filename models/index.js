const mongoose = require('mongoose');
const MovieSchema = require('./movies');
const ActorSchema = require('./actors');
const ReviewSchema = require('./reviews');

const Movie = mongoose.model('Movie', MovieSchema);  // Use 'Movie' as the model name
const Actor = mongoose.model('Actor', ActorSchema);  // Use 'Actor' as the model name
const Review = mongoose.model('Review', ReviewSchema);  // Use 'Review' as the model name

module.exports = {
    Movie,
    Actor,
    Review
};