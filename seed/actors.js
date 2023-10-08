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
    await Actor.deleteMany({})
    const actors = [
        {
            name: 'Marlon Brando',
            age: 99,
            alive: 'no',
            image: 'https://en.wikipedia.org/wiki/Marlon_Brando#/media/File:Marlon_Brando_publicity_for_One-Eyed_Jacks.png',  
        },
        {
            name: 'Al Pacino',
            age: 83,
            alive: 'yes',
            image: 'https://en.wikipedia.org/wiki/Al_Pacino#/media/File:Al_Pacino_2016_(30401544240).jpg',
        },
        {
            name: 'Tim Robbins',
            age: 65,
            alive: 'yes',
            image: 'https://en.wikipedia.org/wiki/Tim_Robbins#/media/File:Tim_Robbins_(Berlin_Film_Festival_2013).jpg'
        },
        {
            name: 'Morgan Freeman',
            age: 86,
            alive: 'yes',
            image: 'https://en.wikipedia.org/wiki/Morgan_Freeman#/media/File:Morgan_Freeman_at_The_Pentagon_on_2_August_2023_-_230802-D-PM193-3363_(cropped).jpg',
        },
        {
            name: 'Liam Neeson',
            age: 71,
            alive: 'yes',
            image: 'https://en.wikipedia.org/wiki/Liam_Neeson#/media/File:Liam_Neeson_Deauville_2012.jpg',
        },
        { 
            name: 'Ralph Fiennes',
            age: 61,
            alive: 'yes',
            image: 'https://en.wikipedia.org/wiki/Ralph_Fiennes#/media/File:Ralph_Fiennes_from_%22The_White_Crow%22_at_Opening_Ceremony_of_the_Tokyo_International_Film_Festival_2018_(31747095048).jpg',
        },
        { 
            name: 'Robert De Niro',
            age: 80,
            alive: 'yes',
            image: 'https://en.wikipedia.org/wiki/Robert_De_Niro#/media/File:Robert_De_Niro_Cannes_2016_2.jpg',
        },
        { 
            name: 'Cathy Moriarty',
            age: 63,
            alive: 'yes',
            image: 'https://en.wikipedia.org/wiki/Cathy_Moriarty#/media/File:Cathy_2017.jpg',
        },
        { 
            name: 'Humphrey Bogart',
            age: 124,
            alive: 'no',
            image: 'https://en.wikipedia.org/wiki/Humphrey_Bogart#/media/File:Humphrey_Bogart_1940.jpg',
        },
        { 
            name: 'Ingrid Bergman',
            age: 108,
            alive: 'no',
            image: 'https://en.wikipedia.org/wiki/Ingrid_Bergman#/media/File:Ingrid_Bergman,_Gaslight_1944.jpg',
        },
    ]
    //This gives the file access to the already-seeded Movies data.
    const movies = await Movie.find({})

    //Function to loop over actors data.  For each actor, findMovie function loops over movies data to see if actors name is included in document.  If found, the id is appended and saved in actor document in created movie key. 
    actors.forEach(actor => {
        const findMovie = movies.find(movie => movie.actors.includes(actor.name))
        if (findMovie) {
            actor.movie = findMovie._id
        } 
    })
    console.log(movies)

    //This is the actual seeding that will push the actor data into the db.
    const createdActors = await Actor.insertMany(actors)
    console.log(createdActors)
    console.log("10 actor documents created!")
}

const run = async () => {
    await main()
    db.close()
}

run()