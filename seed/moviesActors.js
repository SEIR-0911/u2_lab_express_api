const db = require('../db')
const Movie = require('../models/movies')
const Actor = require('../models/actors')
const Review = require('../models/reviews')

//connect to database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {


    //actors JSON
    const actor1 = await new Actor ({
        name: `Brad Pitt`,
        age: `59`,
        isAlive: true,
    })
    actor1.save()

    const actor2 = await new Actor ({
        name: `Matt Damon`,
        age: `52`,
        isAlive: true,
    })
    actor2.save()

    const actor3 = await new Actor ({
        name: `Matthew Mcconaughey`,
        age: `53`,
        isAlive: true,
    })
    actor3.save()

    const actor4 = await new Actor ({
        name: `Sigourney Weaver`,
        age: `73`,
        isAlive: true,
    })
    actor4.save()

    const actor5 = await new Actor ({
        name: `Keanu Reeves`,
        age: `59`,
        isAlive: true,
    })
    actor5.save()

    const actor6 = await new Actor ({
        name: `Cary Grant`,
        age: `82`,
        isAlive: false,
    })
    actor6.save()

    const actor7 = await new Actor ({
        name: `Meryl Streep`,
        age: `74`,
        isAlive: true,
    })
    actor7.save()

    const actor8 = await new Actor ({
        name: `George Clooney`,
        age: `62`,
        isAlive: true,
    })
    actor8.save()

    const actor9 = await new Actor ({
        name: `Halle Berry`,
        age: `57`,
        isAlive: true,
    })
    actor9.save()

    const actor10 = await new Actor ({
        name: `Stephen Yeun`,
        age: `39`,
        isAlive: true,
    })
    actor10.save()

    console.log('Created Actors!')

    const movies = [
        {
            title: `Alien`,
            runtime: `117`,
            rating: `4`,
            yearReleased: `1979`,
            description: `In deep space a crew of a commerical startship, Nostromo is awakened from their cryo-sleep capsules halfway through their journey home to investigate a distress call from an Alien vessel.`,
           // actors: actor4._id,
        },
        {
            title: `Interstellar`,
            runtime: `169`,
            rating: `5`,
            yearReleased: `2014`,
            description: `Interstellar is about Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct.`,
           // actors: actor3._id,
        },
        {
            title: `Rounders`,
            runtime: `120`,
            rating: `4.5`,
            yearReleased: `1998`,
            description: `Rounders is a 1998 American drama film about the underground world of high-stakes poker, directed by John Dahl and starring Matt Damon and Edward Norton.`,
            //actors: actor2._id,
        },
        {
            title: `Oceans Eleven`,
            runtime: `116`,
            rating: `4.5`,
            yearReleased: `2001`,
            description: `Danny Ocean is a man of action. Less than 24 hours into his parole from a New Jersey penitentary, the rye, charismatic thief is already rolling out his next plan. Danny orchestrates the most sophisticated, elaborate casino heist in history.`,
           // actors: [actor1._id, actor2._id],
           //reviews: [review1._id, review2._id]
        },
        {
            title: `John Wick 3`,
            runtime: `131`,
            rating: `4.9`,
            yearReleased: `2019`,
            description: `After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.`,
           // actors: actor5._id,
        },
    ]

    await Movie.insertMany(movies)
    console.log('Created Movies!')

    //reviews JSON - probably need to create each review one at a time. For now I will comment it out
       const review1 = await new Review ({
            score: `4`,
            comment: `Really loved this movie! Loved the action!`
       })
       review1.save()

       const review2 = await new Review ({
            score: `5`,
            comment: `Keanu Reeves is the man!`
       })
       review2.save()

       const review3 = await new Review ({
            score: `3`,
            comment: `Thought it was good, but didn't like the special effects.`
       })
       review3.save()

       const review4 = await new Review ({
            score: 5,
            comment: `Loved the creepy Aliens and the set design was just next level.`
       })
       review4.save()

       const review5 = await new Review ({
            score: 5,
            comment: `Matt Damon is killer in Rounders. Really think he should quit acting and become a professional poker player. Very convincing!`
       })
       review5.save()

       const review6 = await new Review ({
            score: 4,
            comment: `Thought the movie was great. Edward Norton is so annoying.`
       })
       review6.save()

       console.log('Created Reviews!')
}

const run = async () => {
    await main()
    db.close()
}

run()
