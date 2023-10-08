//CONNECT MODELS
const Movie = require('../models/movie') 
const Actor = require('../models/actor')
const Review = require('../models/review')

//EXPORT FUNCTIONS
module.exports = {
    getAllMovies, getOneMovie, getAllActors, getOneActor, getAllReviews, getOneReview
}

//INDEX ROUTE MOVIES
async function getAllMovies(req, res) {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//SHOW ROUTE MOVIE
async function getOneMovie(req,res) {
    try {
        const id = req.params.id
        const movie = await Movie.findById(id)
        if (movie) {
            return res.json(movie)
        }
        return res.status(404).send('Movie with the specified ID does not exist.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//INDEX ROUTE ACTORS
async function getAllActors(req, res) {
    try {
        const actors = await Actor.find()
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//SHOW ROUTE ACTOR
async function getOneActor(req,res) {
    try {
        const id = req.params.id
        const actor = await Actor.findById(id)
        if (actor) {
            return res.json(actor)
        }
        return res.status(404).send('Actor with the specified ID does not exist.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//INDEX ROUTE REVIEWS
async function getAllReviews(req, res) {
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//SHOW ROUTE REVIEW
async function getOneReview(req,res) {
    try {
        const id = req.params.id
        const review = await Review.findById(id)
        if (review) {
            return res.json(review)
        }
        return res.status(404).send('Review with the specified ID does not exist.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}