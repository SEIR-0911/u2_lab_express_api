const db = require('../db')
const { Movie, Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const movies = [
        {
            title: 'A Christmas Prince',
            runtimeInMins: 92,
            rating: 'PG',
            releaseDate: 'Nov. 17, 2017',
            briefDescription: `When a reporter goes undercover as a tutor to get the inside scoop on a playboy prince, she gets tangled in some royal intrigue and ends up finding love - but will she be able to keep up her lie?`,
            image: 'https://en.wikipedia.org/wiki/A_Christmas_Prince#/media/File:A_Christmas_Prince.png'
        },  
        {
            title: 'The Knight Before Christmas',
            runtimeInMins: 92,
            rating: 'NR',
            releaseDate: 'Nov. 21, 2019',
            briefDescription: `A medieval English knight is magically transported to present-day America where he falls for a high school science teacher who is disillusioned by love.`,
            image: 'https://en.wikipedia.org/wiki/The_Knight_Before_Christmas#/media/File:The_Knight_Before_Christmas_poster.jpg'
        },
        {
            title: 'A Castle for Christmas',
            runtimeInMins: 98,
            rating: 'PG',
            releaseDate: 'Nov. 26, 2021',
            briefDescription: `To escape a scandal, a bestselling author journeys to Scotland, where she falls in love with a castle -- and faces off with the grumpy duke who owns it.`,
            image: 'https://en.wikipedia.org/wiki/A_Castle_for_Christmas#/media/File:A_Castle_for_Christmas_Poster.jpg'
        },
        {
            title: 'The Princess Switch',
            runtimeInMins: 101,
            rating: 'PG',
            releaseDate: 'Nov. 16, 2018',
            briefDescription: `Competing in a Christmas baking competition in Belgravia, a Chicago baker bumps into the prince's fiancée--who looks just like her. They switch lives for two days.`,
            image: 'https://en.wikipedia.org/wiki/The_Princess_Switch#/media/File:The_Princess_Switch.png'
        },
        {
            title: 'The Holiday Calendar',
            runtimeInMins: 95,
            rating: 'PG',
            releaseDate: 'Nov. 2, 2018',
            briefDescription: `Before ambitious heiress Ellen Langford can inherit her father's business, she must deliver a special Christmas card to her dad's former partner in Snow Falls. When a snowstorm strands her at the town inn, she discovers the true gift of Christmas.`,
            image: 'https://en.wikipedia.org/wiki/The_Holiday_Calendar#/media/File:The_Holiday_Calendar_poster.jpg'
        }
    ]
    await Movie.insertMany(movies)
    console.log('Movie Magic has been made')
}

const run = async () => {
    await main()
    db.close()
}

run()