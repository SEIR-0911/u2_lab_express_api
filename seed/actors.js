const mongoose = require('mongoose')
const db = require('../db')
const Movie = require('../models/movie')
const Actor = require('../models/actor')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const theDarkKnightId = '65ca087ec5ccddbb28856665'
const prisonersId = '65ca087ec5ccddbb28856666'
const superbadId = '65ca087ec5ccddbb28856667'
const main = async () => {
    // Fetch each movie document by title to get their _ids

    // Define actors with corresponding movieId
    const actors = [
        // Actors for "The Dark Knight"
        {
            name: "Christian Bale",
            age: 44,
            alive: true,
            character: "Bruce Wayne / Batman",
            image: "https://ew.com/thmb/fQCfXEB8_b1lkguuywqtsgQFmzc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dkr-33543-2000-0b3f364c439f442f8de65af7aa9aef68.jpg",
            movieId: theDarkKnightId
        },
        {
            name: "Heath Ledger",
            age: 28,
            alive: false,
            character: "Joker",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/HeathJoker.png/220px-HeathJoker.png",
            movieId:theDarkKnightId
        },
        {
            name: "Aaron Eckhart",
            age: 50,
            alive: true,
            character: "Harvey Dent / Two-Face",
            image: "https://static.wikia.nocookie.net/p__/images/1/1d/Harvey_Dent_DK_02.JPG/revision/latest?cb=20160306181012&path-prefix=protagonist",
            movieId:theDarkKnightId
        },
        // Actors for "Prisoners"
        {
            name: "Hugh Jackman",
            age: 51,
            alive: true,
            character: "Keller Dover",
            image: "https://static.wikia.nocookie.net/p__/images/b/bf/Keller_dover.jpg/revision/latest?cb=20150709193941&path-prefix=protagonist",
            movieId: prisonersId
        },
        {
            name: "Jake Gyllenhaal",
            age: 39,
            alive: true,
            character: "Detective Loki",
            image: "https://static.wikia.nocookie.net/p__/images/a/a5/Detective_Loki.jpg/revision/latest?cb=20150907160020&path-prefix=protagonist",
            movieId: prisonersId
        },
        {
            name: "Paul Dano",
            age: 35,
            alive: true,
            character: "Alex Jones",
            image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/paul-dano-alex-prisoners.jpg",
            movieId: prisonersId
        },
        // Actors for "Superbad"
        {
            name: "Jonah Hill",
            age: 36,
            alive: true,
            character: "Seth",
            image: "https://static.wikia.nocookie.net/p__/images/0/01/Seth_Superbad.jpg/revision/latest?cb=20210323033637&path-prefix=protagonist",
            movieId: superbadId
        },
        {
            name: "Michael Cera",
            age: 32,
            alive: true,
            character: "Evan",
            image: "https://m.media-amazon.com/images/M/MV5BMjAzNzY1MjE1NV5BMl5BanBnXkFtZTcwMDI5NTUxNw@@._V1_.jpg",
            movieId: superbadId
        },
        {
            name: "Christopher Mintz-Plasse",
            age: 31,
            alive: true,
            character: "Fogell / McLovin",
            image: "https://m.media-amazon.com/images/I/61DpzbmqsWL.jpg",
            movieId: superbadId
        }
    ]

    try {
        await Actor.insertMany(actors);
        console.log('Actors seeded successfully')
    } catch (error) {
        console.error('Error seeding actors:', error.message)
    }
};

const run = async () => {
    await main()
    db.close()
}

run()
