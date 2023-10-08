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
    await Movie.deleteMany({})
    const movies = [
        {title: 'The Godfather',
        runtimeMins: 175,
        rating: 'R',
        releaseYear: 1972,
        desc: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.',
        actors: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Diane Keaton'],
        image: 'https://en.wikipedia.org/wiki/The_Godfather#/media/File:Godfather_ver1.jpg',
        },
        {title: 'The Shawshank Redemption',
        runtimeMins: 142,
        rating: 'R',
        releaseYear: 1994,
        desc: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
        actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton', 'William Sadler'],
        image: 'https://en.wikipedia.org/wiki/The_Shawshank_Redemption#/media/File:ShawshankRedemptionMoviePoster.jpg',
        },
        {title: 'Schindler\'s List',
        runtimeMins: 195,
        rating: 'R',
        releaseYear: 1993,
        desc: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
        actors: ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley', 'Caroline Goodall'],
        image: "https://en.wikipedia.org/wiki/Schindler%27s_List#/media/File:Schindler's_List_movie.jpg",
        },
        {title: 'Raging Bull',
        runtimeMins: 129,
        rating: 'R',
        releaseYear: 1980,
        desc: 'The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.',
        actors: ['Robert De Niro', 'Cathy Moriarty', 'Joe Pesci', 'Frank Vincent'],
        image: 'https://en.wikipedia.org/wiki/Raging_Bull#/media/File:Raging_Bull_poster.jpg',
        },
        {title: 'Casablanca',
        runtimeMins: 102,
        rating: 'PG',
        releaseYear: 1942,
        desc: 'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.',
        actors: ['Humphrey Bogart', 'Ingrid Bergman', 'Paul Henreid', 'Claude Rains'],
        image: 'https://en.wikipedia.org/wiki/Casablanca_(film)#/media/File:CasablancaPoster-Gold.jpg',
        },
    ]
    await Movie.insertMany(movies)
    console.log("5 movie documents created!")
}

const run = async () => {
    await main()
    db.close()
}

run()