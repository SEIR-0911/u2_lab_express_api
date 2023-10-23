const db = require('../db');
const { Review, Movie } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error'));

const main = async () => {
    const movies = await Movie.find({
        title: {
            $in: [
                'The Shawshank Redemption',
                'Inception',
                'The Godfather',
                'Jurassic Park',
            ]
        }
    });

    const reviews = [
        {
            user: 'User1',
            userName: 'Cinephile',
            comment: 'One of the greatest movies of all time. A masterpiece!',
            score: 5,
            movieId: movies[0]._id
        },
        {
            user: 'User2', 
            userName: 'Dreamer',
            comment: 'Inception is mind-bending and absolutely brilliant!',
            score: 5,
            movieId: movies[1]._id
        },
        {
            user: 'User3', 
            userName: 'ClassicMovieFan',
            comment: 'The Godfather is a timeless classic with amazing performances.',
            score: 5,
            movieId: movies[2]._id
        },
        {
            user: 'User4', 
            userName: 'DinoEnthusiast',
            comment: 'Jurassic Park is a thrilling adventure with fantastic special effects.',
            score: 4,
            movieId: movies[3]._id
        },
        {
            user: 'User5', 
            userName: 'MovieLover',
            comment: 'The Shawshank Redemption is a deeply moving story with outstanding acting.',
            score: 5,
            movieId: movies[0]._id
        },
        {
            user: 'User6', 
            userName: 'SciFiFanatic',
            comment: 'Inception\'s plot twists kept me on the edge of my seat. A must-watch!',
            score: 4,
            movieId: movies[1]._id
        },
        {
            user: 'User7',
            userName: 'GodfatherFan',
            comment: "Marlon Brando's performance in The Godfather is legendary. A true classic!",
            score: 5,
            movieId: movies[2]._id
        },
        {
            user: 'User8', 
            userName: 'DinosaurGeek',
            comment: "Jurassic Park's dinosaurs are still awe-inspiring even after all these years.",
            score: 5,
            movieId: movies[3]._id
        },
        {
            user: 'User9', 
            userName: 'MovieBuff',
            comment: 'The Shawshank Redemption is a must-see for any cinema enthusiast.',
            score: 4,
            movieId: movies[0]._id
        }
    ];

    await Review.insertMany(reviews);
    console.log('8 more reviews inserted');
}

const run = async () => {
    await main();
    db.close();
}

run();
