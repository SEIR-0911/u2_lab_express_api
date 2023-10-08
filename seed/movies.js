const db = require('../db')
const { Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seedMovies = async () => {
    const movies = [
        {
            title: 'Nimona',
            runtime_mins: 99,
            rating: 'PG',
            release_year: 2023,
            desc: "A knight is framed for a crime he didn't commit, and the only person who can help him prove his innocence is Nimona, a shape-shifting teen who might also be a monster he's sworn to kill."
        },
        {
            title: 'Cloud Atlas',
            runtime_mins: 172,
            rating: 'R',
            release_year: 2012,
            desc: "Actors (Tom Hanks, Halle Berry, Jim Broadbent) take on multiple roles in an epic that spans five centuries. An attorney harbors a fleeing slave on a voyage from the Pacific Islands in 1849; a poor composer in pre-World War II Britain struggles to finish his magnum opus before a past act catches up with him; a genetically engineered worker in 2144 feels the forbidden stirring of human consciousness -- and so on. As souls are born and reborn, they renew their bonds to one another throughout time."
        },
        {
            title: 'Dungeons and Dragons: Honor Among Thieves',
            runtime_mins: 134,
            rating: 'PG-13',
            release_year: 2023,
            desc: "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people."
        },
        {
            title: 'Barbie',
            runtime_mins: 114,
            rating: 'PG-13',
            release_year: 2023,
            desc: "Barbie suffers a crisis that leads her to question her world and her existence."
        },
        {
            title: 'Everything Everywhere All at Once',
            runtime_mins: 139,
            rating: 'R',
            release_year: 2022,
            desc: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led."
        }
    ]
    await Movie.insertMany(movies)
    console.log('movies added')
}

async function run(){
    await seedMovies()
    db.close
}

run()