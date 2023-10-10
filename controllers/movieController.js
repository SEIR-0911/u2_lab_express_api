const db = require('../db')

//CONNECT MODELS
const Movie = require('../models/movie') 
const Actor = require('../models/actor')
const Review = require('../models/review')

//EXPORT FUNCTIONS
module.exports = {
    getAllMovies, getOneMovie, createMovie, updateMovie, deleteMovie, getAllActors, getOneActor, createActor, updateActor, deleteActor, getAllReviews, getOneReview, createReview, updateReview, deleteReview 
}

//MOVIES
//INDEX ROUTE MOVIES
async function getAllMovies(req, res) {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//SHOW ROUTE MOVIE.  RETURNS ERROR MESSAGE IF USER INPUT ID DOES NOT EXIST.
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

//CREATE MOVIE
async function createMovie(req, res){
    try{
        const movie = await new Movie(req.body)
        await movie.save()
        return res.status(201).json({movie}) 
    } catch (error) {
        return res.status(500).json({error: e.message})
    }
}

//UPDATE MOVIE
async function updateMovie(req,res){
    try {
        const id = req.params.id
        const movie = await Movie.findByIdAndUpdate(id, req.body, {new: true})
        if (movie) {
            return res.status(200).json(movie)
        }
        throw new Error("Movie not found.")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//DELETE MOVIE
async function deleteMovie(req,res){
    try{
        const id = req.params.id
        let movie = await Movie.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Movie deleted")
        }
        throw new Error("Movie not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//ACTORS

//INDEX ROUTE ACTORS
async function getAllActors(req, res) {
    try {
        const actors = await Actor.find()
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//SHOW ROUTE ACTOR.  RETURNS ERROR MESSAGE IF USER INPUT ID DOES NOT EXIST.
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

//CREATE ACTOR
async function createActor(req, res){
    try{
        const actor = await new Actor(req.body)
        await actor.save()
        return res.status(201).json({
            actor
        }) 
    } catch (error) {
        return res.status(500).json({error: e.message})
    }
}

//UPDATE ACTOR
async function updateActor(req,res){
    try {
        const id = req.params.id
        const actor = await Actor.findByIdAndUpdate(id, req.body, {new: true})
        if (actor) {
            return res.status(200).json(actor)
        }
        throw new Error("Actor not found.")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//DELETE ACTOR
async function deleteActor(req,res){
    try{
        const id = req.params.id
        let actor = await Actor.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Actor deleted")
        }
        throw new Error("Actor not found")
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

//SHOW ROUTE REVIEW. RETURNS ERROR MESSAGE IF USER INPUT ID DOES NOT EXIST.
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
//CREATE REVIEW
async function createReview(req, res){
    try{
        const review = await new Review(req.body)
        await review.save()
        return res.status(201).json({review}) 
    } catch (error) {
        return res.status(500).json({error: e.message})
    }
}

//UPDATE REVIEW
async function updateReview(req,res){
    try {
        const id = req.params.id
        const review = await Review.findByIdAndUpdate(id, req.body, {new: true})
        if (review) {
            return res.status(200).json(review)
        }
        throw new Error("Review not found.")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//DELETE ACTOR
async function deleteReview(req,res){
    try{
        const id = req.params.id
        let review = await Review.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Review deleted")
        }
        throw new Error("Review not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//AAU, I want to sort my reviews by ascending or descending order
const sortReviewsAscending = async() => {
    try {
        const reviews = await Review.find().sort('title')
        console.log(reviews)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const sortReviewsDescending = async() => {
    try {
        const reviews = await Review.find().sort('-title')
        console.log(reviews)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//AAU, I want to sort my movies by newest or oldest
const sortMoviesNewToOld = async() => {
    try {
        const movies = await Movie.find().sort('-releaseYear')
        console.log(movies)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const sortMoviesOldtoNew = async() => {
    try {
        const movies = await Movie.find().sort('releaseYear')
        console.log(movies)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function main() {
    try{
        //Uncomment the functions you want to run
        //await sortReviewsAscending()
        //await sortReviewsDescending()
        //await sortMoviesNewToOld()
        //await sortMoviesOldtoNew()
    } catch (error) {
        console.error(error)
    } finally {
        await db.close
    }
}

main()