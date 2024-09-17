//CONNECT DB
const db = require('../db/index.js')

//CONNECT MODELS
const Movie = require('../models/movie') 
const Actor = require('../models/actor')
const Review = require('../models/review')

//SEND ERROR IS THERE IS A PROBLEM CONNECTING TO THE DB WHILE THE CONNECTION IS ON
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//BUILD DOCUMENTS WITH THE MODELS
const main = async () => {
    await Review.deleteMany({})
    const reviews = [
        {
            title: 'The Godfather',
            score: 9.3,
            comment: 'The Godfather is told entirely within a closed world. That\’s why we sympathize with characters who are essentially evil.',
        },
        {
            title: 'The Godfather',
            score: 9.1,
            comment: 'The story by Mario Puzo and Francis Ford Coppola is a brilliant conjuring act, inviting us to consider the Mafia entirely on its own terms.',
        },
        {
            title: 'The Shawshank Redemption',
            score: 9.4,
            comment: 'It is a strange comment to make about a film set inside a prison, but \"The Shawshank Redemption\" creates a warm hold on our feelings because it makes us a member of a family.',
        },
        {
            title: 'The Shawshank Redemption',
            score: 9.2,
            comment: 'Many movies offer us vicarious experiences and quick, superficial emotions. "Shawshank" slows down and looks.',
        },
        {
            title: 'Schindler\'s List',
            score: 9.1,
            comment: 'Oskar Schindler would have been an easier man to understand if he\'d been a conventional hero, fighting for his beliefs.',
        },
        {
            title: 'Schindler\'s List',
            score: 8.9,
            comment: 'The fact that he was flawed - a drinker, a gambler, a womanizer, driven by greed and a lust for high living - makes his life an enigma.',
        },
        {
            title: 'Raging Bull',
            score: 8.2,
            comment: 'Martin Scorsese\'s "Raging Bull" is a movie about brute force, anger, and grief.',
        },
        {
            title: 'Raging Bull',
            score: 8.0,
            comment: 'It is also, like several of Scorsese\'s other movies, about a man\'s inability to understand a woman except in terms of the only two roles he knows how to assign her: virgin or whore.',
        },
        {
            title: 'Casablanca',
            score: 8.6,
            comment: 'If we identify strongly with the characters in some movies, then it is no mystery that “Casablanca” is one of the most popular films ever made.',
        },
        {
            title: 'Casablanca',
            score: 8.4,
            comment: 'It is about a man and a woman who are in love, and who sacrifice love for a higher purpose.',
        },
    ]
    //This gives the file access to the already-seeded Movies data.
    const movies = await Movie.find({})

    //Function to loop over reviews data.  For each review, findMovieId function loops over movies data to see if title matches title in review.  If it matches, the id is appended and saved in review document in created movieId key. 
    reviews.forEach(review => {
        const findMovieId = movies.find(movie => movie.title === review.title)
        if (findMovieId) {
            review.movie = findMovieId._id
        } 
    })
    //This is the actual seeding that will push the review data into the db.
    const createdReviews = await Review.insertMany(reviews)
    console.log(createdReviews)
    console.log("10 review documents created!")
}

const run = async () => {
    await main()
    db.close()
}

run()