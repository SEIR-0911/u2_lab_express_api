const mongoose = require('mongoose');
const db = require('./config/db');
const { Movie, Actor, Review } = require('./models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const seedDB = async () => {
    try {
        // await Movie.deleteMany({});
        // await Actor.deleteMany({});
        // await Review.deleteMany({});

        const actor1 = new Actor({
            name: "Leonardo DiCaprio",
            age: 46,
            alive: true,
            image: "https://via.placeholder.com/200x300?text=Leonardo+DiCaprio"
        });

        const actor2 = new Actor({
            name: "Natalie Portman",
            age: 40,
            alive: true,
            image: "https://via.placeholder.com/200x300?text=Natalie+Portman"
        });

        await actor1.save();
        await actor2.save();

        const movie1 = new Movie({
            title: "Inception",
            runtime: 148,
            rating: 9.0,
            yearReleased: 2010,
            description: "A thief who enters the dreams of others must perform inception.",
            poster: "https://via.placeholder.com/200x300?text=Inception+Poster"
        });

        const movie2 = new Movie({
            title: "Black Swan",
            runtime: 108,
            rating: 8.0,
            yearReleased: 2010,
            description: "A ballet dancer is consumed by her dual role in the play Swan Lake.",
            poster: "https://via.placeholder.com/200x300?text=Black+Swan+Poster"
        });

        await movie1.save();
        await movie2.save();

        const review1 = new Review({
            score: 90,
            comment: "Amazing movie with intricate details.",
            movie: movie1._id
        });

        const review2 = new Review({
            score: 85,
            comment: "Intense and captivating. A must watch!",
            movie: movie2._id
        });

        await review1.save();
        await review2.save();

        console.log("Database seeded!");
        process.exit();

    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
};


seedDB();
