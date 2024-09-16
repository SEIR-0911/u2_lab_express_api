const db = require('../db')
const { Actor, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const christmasPrince = await Movie.find({title: 'A Christmas Prince'})
    const knightBefore = await Movie.find({title: 'The Knight Before Christmas'})
    const castleChristmas = await Movie.find({title: 'A Castle for Christmas'})
    const princessSwitch = await Movie.find({title: 'The Princess Switch'})
    const holidayCalendar = await Movie.find({title: 'The Holiday Calendar'})

    const actors = [
        {
            name: 'Rose McIver',
            birthday: '10 October 1988',
            alive: true,
            image: 'https://en.wikipedia.org/wiki/Rose_McIver#/media/File:Rose_McIver_WonderCon_2015.jpg',
            movies: [{ movieId: christmasPrince[0]._id }]
        },
        {
            name: 'Ben Lamb',
            birthday: '24 January 1989',
            alive: true,
            image: 'https://en.wikipedia.org/wiki/Ben_Lamb_(actor)#/media/File:Ben_Lamb_retrato.jpg',
            movies: [{movieId: christmasPrince[0]._id }]
        },
        {
            name: 'Vanessa Hudgens',
            birthday: 'December 14, 1988',
            alive: true,
            image: 'https://en.wikipedia.org/wiki/Vanessa_Hudgens#/media/File:Vanessa_Hudgens_-_2019_by_Glenn_Francis.jpg',
            movies: [{ movieId: knightBefore[0]._id }, { movieId: princessSwitch[0]._id }]
        },
        {
            name: 'Josh Whitehouse',
            birthday: '27 February 1990',
            alive: true,
            image: 'https://resizing.flixster.com/RCveFLlXP-6J9wmBkK9ZjpS_x2c=/218x280/v2/https://flxt.tmsimg.com/assets/902461_v9_ba.jpg',
            movies: [{ movieId: knightBefore[0]._id }]
        },
        {
            name: 'Brooke Shields',
            birthday: 'May 31, 1965',
            alive: true,
            image: 'https://en.wikipedia.org/wiki/Brooke_Shields',
            movies: [{ movieId: castleChristmas[0]._id }]
        },
        {
            name: 'Cary Elwes',
            birthday: '26 October 1962',
            alive: true,
            image: 'https://en.wikipedia.org/wiki/Cary_Elwes',
            movies: [{ movieId: castleChristmas[0]._id }]
        },
        {
            name: 'Sam Palladio',
            birthday: '	21 November 1986',
            alive: true,
            image: 'https://en.wikipedia.org/wiki/Sam_Palladio#/media/File:Sam_Palladio_-_Nashville_Live.jpg',
            movies: [{ movieId: princessSwitch[0]._id }]
        },
        {
            name: 'Nick Sagar',
            birthday: '7 January 1988',
            alive: true,
            image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gGjr1vuxFeTMIRzXVwDCTWMbOrb.jpg',
            movies: [{ movieId: princessSwitch[0]._id }]
        },
        {
            name: 'Kat Graham',
            birthday: '5 September, 1989',
            alive: true,
            image: 'https://en.wikipedia.org/wiki/Kat_Graham#/media/File:Nmacc-2023-0401-Kat_Graham.jpg',
            movies: [{ movieId: holidayCalendar[0]._id }]
        },
        {
            name: 'Quincy Brown',
            birthday: '4 June, 1991',
            alive: true,
            image: 'https://en.wikipedia.org/wiki/Quincy_(actor)#/media/File:Quincy_Brown_MTV_Awards_2018.jpg',
            movies: [{ movieId: holidayCalendar[0]._id }]
        }
    ]
    await Actor.insertMany(actors)
    console.log('The roles have been cast')
}

const run = async () => {
    await main()
    db.close()
}

run()