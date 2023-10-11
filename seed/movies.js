const db = require('../config')
const Movie = require('../models/movies')
const Actor = require('../models/actors')
const Review = require('../models/reviews')
const actors = require('../models/actors')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const addActors = async () => {
    const actorsSeedData = [
        {
          name: "Tim Robbins",
          age: 63,
          alive: true,
        },
        {
          name: "Morgan Freeman",
          age: 84,
          alive: true,
        },
        {
          name: "Marlon Brando",
          age: 80,
          alive: false,
        },
        {
          name: "Al Pacino",
          age: 81,
          alive: true,
        },
        {
          name: "John Travolta",
          age: 67,
          alive: true,
        },
        {
          name: "Samuel L. Jackson",
          age: 72,
          alive: true,
        },
        {
          name: "Liam Neeson",
          age: 69,
          alive: true,
        },
        {
          name: "Ralph Fiennes",
          age: 58,
          alive: true,
        },
        {
          name: "Tom Hanks",
          age: 65,
          alive: true,
        },
        {
          name: "Robin Wright",
          age: 56,
          alive: true,
        },
        {
          name: "Keanu Reeves",
          age: 57,
          alive: true,
        },
        {
          name: "Laurence Fishburne",
          age: 60,
          alive: true,
        },
        {
          name: "Sam Neill",
          age: 74,
          alive: true,
        },
        {
          name: "Laura Dern",
          age: 55,
          alive: true,
        },
        {
          name: "Brad Pitt",
          age: 58,
          alive: true,
        },
        {
          name: "Edward Norton",
          age: 52,
          alive: true,
        },
        {
          name: "Mel Gibson",
          age: 66,
          alive: true,
        },
        {
          name: "Sophie Marceau",
          age: 55,
          alive: true,
        },
        {
          name: "Jodie Foster",
          age: 59,
          alive: true,
        },
        {
          name: "Anthony Hopkins",
          age: 84,
          alive: true,
        },
      ]
      await Actor.insertMany(actorsSeedData)
      console.log("Created some actors")
}

async function getActorId(actorName) {
    return (await Actor.findOne({name:actorName}))._id
}

async function getMovieId(movieName) {
    return (await Movie.findOne({title:movieName}))._id
}

const addMovies = async () => {
    
    
    const moviesSeedData = [
        {
          title: "The Shawshank Redemption",
          runtime: 142,
          rating: 9.3,
          yearReleased: 1994,
          description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          actors: [await getActorId("Tim Robbins"), await getActorId("Morgan Freeman")],
        },
        {
          title: "The Godfather",
          runtime: 175,
          rating: 9.2,
          yearReleased: 1972,
          description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          actors: [await getActorId("Marlon Brando"), await getActorId("Al Pacino")],
        },
        {
          title: "Pulp Fiction",
          runtime: 154,
          rating: 8.9,
          yearReleased: 1994,
          description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          actors: [await getActorId("John Travolta"), await getActorId("Samuel L. Jackson")],
        },
        {
          title: "Schindler's List",
          runtime: 195,
          rating: 8.9,
          yearReleased: 1993,
          description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
          actors: [await getActorId("Liam Neeson"), await getActorId("Ralph Fiennes")],
        },
        {
          title: "Forrest Gump",
          runtime: 142,
          rating: 8.8,
          yearReleased: 1994,
          description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
          actors: [await getActorId("Tom Hanks"), await getActorId("Robin Wright")],
        },
        {
          title: "The Matrix",
          runtime: 136,
          rating: 8.7,
          yearReleased: 1999,
          description: "A computer programmer discovers that reality as he knows it is a simulation created by machines to subjugate humanity, and he joins a rebellion against the machines.",
          actors: [await getActorId("Keanu Reeves"), await getActorId("Laurence Fishburne")],
        },
        {
          title: "Jurassic Park",
          runtime: 127,
          rating: 8.1,
          yearReleased: 1993,
          description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
          actors: [await getActorId("Sam Neill"), await getActorId("Laura Dern")],
        },
        {
          title: "Fight Club",
          runtime: 139,
          rating: 8.8,
          yearReleased: 1999,
          description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          actors: [await getActorId("Brad Pitt"), await getActorId("Edward Norton")],
        },
        {
          title: "Braveheart",
          runtime: 178,
          rating: 8.3,
          yearReleased: 1995,
          description: "When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England.",
          actors: [await getActorId("Mel Gibson"), await getActorId("Sophie Marceau")],
        },
        {
          title: "The Silence of the Lambs",
          runtime: 118,
          rating: 8.6,
          yearReleased: 1991,
          description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
          actors: [await getActorId("Jodie Foster"), await getActorId("Anthony Hopkins")],
        },
      ]

    await Movie.insertMany(moviesSeedData)
    console.log("added some movies")

}

const findAllActors = async () => {
    // await Actor.find()
    console.log(await Actor.find())
}
const findAllMovies = async () => {
    // await Actor.find()
    console.log(await Movie.find())
}

const findAllReviews = async () => {
    // await Actor.find()
    console.log(await Review.find())
}



const addReviews = async () => {
    const movie1 = await getMovieId("The Silence of the Lambs")
    const movie2 = await getMovieId("Braveheart")
    const movie3 = await getMovieId("Fight Club")
    const review = [
        {
            movie: movie1,
            score: 99,
            comment: "a timeless classic with a gripping storyline that leaves a lasting impact"
        },
        {
            movie: movie1,
            score: 98,
            comment: "Amazing" 
        },
        {
            movie: movie2,
            score: 99,
            comment: "a timeless storyline that leaves a lasting impact"
        },
        {
            movie: movie2,
            score: 98,
            comment: "kinda Amazing" 
        },{
            movie: movie3,
            score: 99,
            comment: " classic with a gripping storyline that leaves a lasting impact"
        },
        {
            movie: movie3,
            score: 98,
            comment: "not Amazing" 
        }

    ]
    await Review.insertMany(review)
    
    const reviews = await Review.find({movie: movie1}) 
    const reviewsIds = []
    reviews.forEach((review) => {
        reviewsIds.push(review._id)
    })
    console.log(reviewsIds)
    
    await Movie.findByIdAndUpdate(movie1, {reviews: reviewsIds})        

    const reviews2 = await Review.find({movie: movie2}) 
    const reviews2Ids = []
    reviews2.forEach((review) => {
        reviews2Ids.push(review._id)
    })
    console.log(reviews2Ids)
    
    await Movie.findByIdAndUpdate(movie2, {reviews: reviewsIds}) 

    const reviews3 = await Review.find({movie: movie3}) 
    const reviews3Ids = []
    reviews3.forEach((review) => {
        reviews3Ids.push(review._id)
    })
    console.log(reviews3Ids)
    
    await Movie.findByIdAndUpdate(movie3, {reviews: reviews3Ids})     
}


const  deleteAll = async () =>
 {
    await Actor.deleteMany({})
    await Movie.deleteMany({})
    await Review.deleteMany({})
 }

const run = async () => {
    // await addActors()

    // await findAllActors()

    // await addMovies()
    await findAllMovies()

    // await addReviews()
    // await findAllReviews()
    // await deleteAll()
    db.close()
}

run()