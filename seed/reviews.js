const db = require('../db')
const { Review, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const christmasPrince = await Movie.find({title: 'A Christmas Prince'})
    const knightBefore = await Movie.find({title: 'The Knight Before Christmas'})
    const castleChristmas = await Movie.find({title: 'A Castle for Christmas'})
    const princessSwitch = await Movie.find({title: 'The Princess Switch'})
    const holidayCalendar = await Movie.find({title: 'The Holiday Calendar'})

    const reviews = [
        {
            userName: 'Scrooge',
            comment: `I'd give it zero stars if I could. I can't beleive I wasted my time on this. Horrible movie about a horrible holiday`,
            score: 1,
            movieId: christmasPrince[0]._id
        },
        {
            userName: 'frosty-man-of-snow',
            comment: `This movie has everything: an enemies to lovers story arc, a misunderstood prince, a fake european country. What's not to love?`,
            score: 10,
            movieId: christmasPrince[0]._id
        },
        {
            userName: 'KristenKringle',
            comment: `Fabulously good Christmas time! I loved how it referenced A Christmas Prince and that we saw the couple on the news. It's like the making of a new Christmas Universe.`,
            score: 10,
            movieId: knightBefore[0]._id 
        },
        {
            userName: 'rudolph',
            comment: `The sweaters alone are a ten star experience.`,
            score: 10,
            movieId: knightBefore[0]._id
        },
        {
            userName: 'sugarplum21',
            comment: `Frank and Mrs. Donatelli from the Princess Switch showed up at the inn to rent a room. Netflix has created an alternate Christmas dimension.`,
            score: 10,
            movieId: castleChristmas[0]._id
        },
        {
            userName: 'one-wise-man',
            comment: `What more could you ask for in a movie?`,
            score: 10,
            movieId: castleChristmas[0]._id
        },
        {
            userName: 'CandyCane4',
            comment: `All the best things about The Parent Trap combined with all the best things from Princess Diaries`,
            score: 10,
            movieId: princessSwitch[0]._id
        },
        {
            userName: 'fruitcake23',
            comment: `Did anyone else notice that A Christmas Prince was on in the background? I feel like there's a connection between all these movies.`,
            score: 10,
            movieId: princessSwitch[0]._id
        },
        {
            userName: 'JollyHolly',
            comment: `A feel good classic.`,
            score: 10,
            movieId: holidayCalendar[0]._id
        },
        {
            userName: 'santaBaby09',
            comment: `There were so many of the other Netflix christmas movies on the tv! How much fun!`,
            score: 10,
            movieId: holidayCalendar[0]._id
        }
    ]
    await Review.insertMany(reviews)
    console.log('The results are in')
}

const run = async () => {
    await main()
    db.close()
}

run()
