const db = require('../db');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Chance = require('chance');
const chance = new Chance();

const { Actor, Review, Movie } = require('../models');
const actors = require("./data/actors.json");
const reviews = require("./data/reviews.json");
const movies = require("./data/movies.json");

let actorsList;
let reviewsList;

const createActor = async () => {
    actorsList = actors.map((actor) => {
        return new Actor({
            name: actor.name,
            stillAlive: actor.stillAlive,
            url: actor.url
        });
    });
    let createActors = await Actor.insertMany(actorsList);
    console.log(createActors);
};

const createReview = async () => {
    reviewsList = reviews.map((review) => {
        return new Review({
            email: review.email,
            score: review.score,
            date: chance.date(),
            description: review.description
        });
    });
    let createReviews = await Review.insertMany(reviewsList);
    console.log(createReviews);
};

const createMovie = async () => {
    const moviesList = movies.map((movie) => {
        return new Movie({
            title: movie.title,
            runtime: movie.runtime,
            rating: movie.rating,
            actors: chance.pickset(actorsList, chance.integer({ min: 2, max: 5 })).map(e => e._id),
            released: movie.released,
            description: movie.description,
            url: movie.url,
            reviews: chance.pickset(reviewsList, chance.integer({ min: 0, max: 3 })).map(e => e._id),
        });
    });
    let createMovies = await Movie.insertMany(moviesList);
    console.log(createMovies);
};

const run = async () => {
    await createActor();
    await createReview();
    await createMovie();

    //if need to clean up
    // let deleteActors = await Actor.deleteMany();
    // console.log(deleteActors);
    // let deleteReviews = await Review.deleteMany();
    // console.log(deleteReviews);
    // let deleteMovies = await Movie.deleteMany();
    // console.log(deleteMovies);

    db.close();
};

run();