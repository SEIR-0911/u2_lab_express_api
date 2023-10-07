const db = require('../db')
const Movie = require('../models/movies')
const Actor = require('../models/actors')
const Review = require('../models/reviews')

//connect to database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const createMovies = async () => {
    const movies = [
        {
            title: `Scream`,
            runtime: `200`,
            rating: `4`,
            yearReleased: `1999`,
            description: `Bye`,
        },
        {
            title: `Interstellar`,
            runtime: `169`,
            rating: `5`,
            yearReleased: `2014`,
            description: `Interstellar is about Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct.`,
        },
        {
            title: `Rounders`,
            runtime: `120`,
            rating: `4.5`,
            yearReleased: `1998`,
            description: `Rounders is a 1998 American drama film about the underground world of high-stakes poker, directed by John Dahl and starring Matt Damon and Edward Norton.`,
        },
        {
            title: `Meet Joe Black`,
            runtime: `181`,
            rating: `4`,
            yearReleased: `1998`,
            description: `Bill Parrish (Anthony Hopkins), businessman and devoted family man, is about to celebrate his 65th birthday. However, before he reaches that landmark, he is visited by Death (Brad Pitt), who has taken human form as Joe Black, a young man who recently died. Joe and Bill make a deal: Bill will be given a few extra days of his life, and Joe will spend the same time getting to know what it's like to be human. It seems like a perfect arrangement, until Joe falls in love -- with Bill's daughter.`,
        },
        {
            title: `John Wick 3`,
            runtime: `131`,
            rating: `4.9`,
            yearReleased: `2019`,
            description: `After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.`,
        },
    ]

        await Movie.insertMany(movies)
        console.log('Created some movies!')
    }

    const createActors = async (movies) => {
        //guessing this is where I will pull my ratings?


        const actors = [
            {
                name: `Brad Pitt`,
                age: 40,
                isAlive: true,
            },
        ]
        await Actor.insertMany(actors)
        console.log('Created Actors')
    
    }

    const run = async () => {
        const movies = await createMovies()
        await createActors(movies)
        db.close()
    } 


//what I should be running once I create a main function from the products and brands seed from today's lab!
    //const run = async () => {
       // await.main()
      //  db.close()
   // }

    run()

