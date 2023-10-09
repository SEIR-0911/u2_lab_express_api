const db = require('../db')
const { Actor, Movie, Review } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movie1 = await new Movie({
        title: "Django",
        runtime: 120,
        rating:"R",
        release: 2012,
        description: "A movie about a slave becoming a free man"
    })
    movie1.save()

    const movie2 = await new Movie({
        title: "Gone in 60 seconds",
        runtime: 85,
        rating: "R",
        release: 2000,
        description: "A movie about a car theif saving his family"
    })
    movie2.save()

    const movie3 = await new Movie({
        title: "Spawn",
        runtime: 75,
        rating:"R",
        release: 1997,
        description: "A movie about a demon"
    })
    movie3.save()

    const movie4 = await new Movie({
        title: "Scary Movie 1",
        runtime: 60,
        rating:"R",
        release: 2000,
        description: "A spoof movie making fun of other movies"
    })
    movie4.save()

    const movie5 = await new Movie({
        title: "American Pie",
        runtime: 72,
        rating:"R",
        release: 1999,
        description: "A movie aboout teenagers"
    })
    movie5.save()

    const actors = [
        {
            name: "Jamie Fox",
            age: 45,
            living: "True",
            movie: movie1._id
        },
        {
            name: "Leonardo Dicapprio",
            age: 50,
            living: "True",
            movie: movie1._id
        },
        {
            name: "Nicolas Cage",
            age: 55,
            living: "True",
            movie: movie2._id
        },
        {
            name: "Angelina Jolie",
            age: 50,
            living: "True",
            movie: movie2._id
        },
        {
            name: "Michael White",
            age: 57,
            living: "True",
            movie: movie3._id
        },
        {
            name: "John Leguizmano",
            age: 57,
            living: "True",
            movie: movie3._id
        },
        {
            name: "Marlon Wayans",
            age: 45,
            living: "True",
            movie: movie4._id
        },
        {
            name: "Shannon Elizabeth",
            age: 53,
            living: "True",
            movie: movie4._id,
            movie: movie5._id
        },
        {
            name: "Jason Biggs",
            age: 55,
            living: "True",
            movie: movie5._id
        },
        {
            name: "Sean Scott",
            age: 57,
            living: "True",
            movie: movie5._id
        },
        
    ]
    await Actor.insertMany(actors)
  console.log('Created actors!')

    const reviews = [
        {
            score: 5,
            comment: "Wildy fantastic brilliant says NY Times ",
            movie: movie1._id
        },
        {
            score: 4,
            comment: "The directors greatest hit ",
            movie: movie1._id
        },
        {
            score: 4,
            comment: "What a THRILLER ",
            movie: movie2._id
        },
        {
            score: 4,
            comment: "Nicholas greates work ",
            movie: movie2._id
        },
        {
            score: 1,
            comment: "Awful movie ",
            movie: movie3._id
        },
        {
            score: 2,
            comment: "Box office drop ",
            movie: movie3._id
        },
        {
            score: 2,
            comment: "gimmicy!!! ",
            movie: movie4._id
        },
        {
            score: 3,
            comment: "Hilarious but no story ",
            movie: movie4._id
        },
        {
            score: 5,
            comment: "Stifflers a legend!! ",
            movie: movie5._id
        },
        {
            score: 5,
            comment: "A cult classic ",
            movie: movie5._id
        },
    ]
    await Review.insertMany(reviews)
    console.log('Created reviews!')
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()