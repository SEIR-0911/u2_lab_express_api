const db = require('../db')
const { Movie, Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB Connection Errored'))

const main = async () => {
    const movies = [
        {
            id: 1,
            title: 'The Hustle',
            runtime: 94,
            rating: 4,
            yearReleased: 2019 ,
            movieImage: 'https://upload.wikimedia.org/wikipedia/en/3/3a/The_Hustle_film_poster.png'
        },
        {
            id: 2,
            title: 'Devil Wears Prada',
            runtime: 109,
            rating: 6.7,
            yearReleased: 2006,
            movieImage: 'https://upload.wikimedia.org/wikipedia/en/e/e7/The_Devil_Wears_Prada_main_onesheet.jpg'
        },
        {
            id: 3,
            title: 'Ocean\'s 8',
            runtime: 110,
            rating: 6.2,
            yearReleased: 2018,
            movieImage: 'https://upload.wikimedia.org/wikipedia/en/d/dd/OceansEightPoster.jpeg'
        },
        {
            id: 4, 
            title: 'The Princess Diaries',
            runtime: 115,
            rating: 5.3,
            yearReleased: 2001,
            movieImage: 'https://upload.wikimedia.org/wikipedia/en/5/58/Princess_diaries_ver1.jpg'
        },
        {
            id: 5,
            title: 'The Dark Knight Rises',
            runtime: 165,
            rating: 5.5,
            yearReleased: 2012,
            movieImage: 'https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg'
        }
    ]

    await Movie.insertMany(movies)
}

const run = async () => {
    await main()
    db.close()
}

run()