const { Movie, Actor, Review } = require('../models');
module.exports = {
    getAllMovies,
    getOneMovie,
    getAllActors,
    getOneActor,
    getAllReviews,
    getOneReview,
    createActor


};

//GET-movies
async function getAllMovies(req, res) {
    console.log("Displaying all movies...");
    try {
        const movies = await Movie.find();
        return res.json(movies);

    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}

async function getOneMovie(req, res) {
    try {
        const id = req.params.id;
        const movie = await Movie.findById(id);
        return movie ? res.json(movie) : res.status(404).send(`Movie with spesific ID does not exist!`);
    } catch (error) {

        return res.status(500).send(error.message);
    }
}

//GET-actors
async function getAllActors(req, res) {
    console.log("Displaying all actors...");
    try {
        const actors = await Actor.find();
        return res.json(actors);

    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}

async function getOneActor(req, res) {
    try {
        const id = req.params.id;
        const acotr = await Actor.findById(id);
        return acotr ? res.json(acotr) : res.status(404).send(`Actor with spesific ID does not exist!`);
    } catch (error) {

        return res.status(500).send(error.message);
    }
}

//GET-Reviews
async function getAllReviews(req, res) {
    console.log("Displaying all Reviews...");
    try {
        const reviews = await Review.find();
        return res.json(review);

    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}

async function getOneReview(req, res) {
    try {
        const id = req.params.id;
        const review = await Review.findById(id);
        return review ? res.json(review) : res.status(404).send(`Review with spesific ID does not exist!`);
    } catch (error) {

        return res.status(500).send(error.message);
    }
}

//post - actor
async function createActor(req, res) {
    try {
        console.log(req.body);
        const actor = await Actor.create(req.body);

        return res.status(201).json({ actor });
    } catch (error) {

        return res.status(500).send(error.message);
    }
}
