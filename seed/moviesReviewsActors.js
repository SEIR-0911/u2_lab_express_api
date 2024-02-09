const db = require('../db')
const Movie = require('../models/movie')
const Actor = require('../models/actor')
const Review = require('../models/review')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movie1 = await new Movie({
        title: "What About Bob",
        runtimeInMins: 99,
        rating: "PG",
        yearReleased: 1991,
        description: "A successful psychotherapist loses his mind after one of his most dependent patients, an obsessive-compulsive neurotic, tracks him down during his family vacation."
    })
    movie1.save()

    const movie2 = await new Movie({
        title: "Good Will Hunting",
        runtimeInMins: 126,
        rating: "R",
        yearReleased: 1997,
        description: "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life."
    })
    movie2.save()

    const movie3 = await new Movie({
        title: "Step Brothers",
        runtimeInMins: 98,
        rating: "R",
        yearReleased: 2008,
        description: "Two aimless middle-aged men still living at home are forced against their will to become roommates when their parents marry."
    })
    movie3.save() 
    
    const movie4 = await new Movie({
        title: "The Count of Monte Cristo",
        runtimeInMins: 131,
        rating: "PG-13",
        yearReleased: 2002,
        description: "A young man, falsely imprisoned by his jealous friend, escapes and uses a hidden treasure to exact his revenge."
    })
    movie4.save()

    const movie5 = await new Movie({
        title: "The Fast and the Furious",
        runtimeInMins: 106,
        rating: "PG-13",
        yearReleased: 2001,
        description: "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy."
    })
    movie5.save()
    
    const actors = [
        {
            name: "Bill Murray",
            age: 73,
            stillAlive: true,
            hometown: "Evanston, IL",
            movie: movie1._id
        },
        {
            name: "Richard Dreyfuss",
            age: 75,
            stillAlive: true,
            hometown: "New York, NY",
            movie: movie1._id
        },
        {
            name: "Julie Hagerty",
            age: 68,
            stillAlive: true,
            hometown: "Cincinnati, OH",
            movie: movie1._id
        },
        {
            name: "Matt Damon",
            age: 53,
            stillAlive: true,
            hometown: "Cambridge, MA",
            movie: movie2._id
        },
        {
            name: "Ben Affleck",
            age: 51,
            stillAlive: true,
            hometown: "Berkeley, CA",
            movie: movie2._id
        },
        {
            name: "Robin Williams",
            age: 63,
            stillAlive: false,
            hometown: "Chicago, IL",
            movie: movie2._id
        },
        {
            name: "Will Ferrell",
            age: 56,
            stillAlive: true,
            hometown: "Irvine, CA",
            movie: movie3._id
        },
        {
            name: "John C. Reilly",
            age: 58,
            stillAlive: true,
            hometown: "Chicago, IL",
            movie: movie3._id
        },
        {
            name: "Mary Steenburgen",
            age: 70,
            stillAlive: true,
            hometown: "Newport, AZ",
            movie: movie3._id
        },
        {
            name: "Jim Caviezel",
            age: 55,
            stillAlive: true,
            hometown: "Mount Vernon, WA",
            movie: movie4._id
        },
        {
            name: "Guy Pearce",
            age: 56,
            stillAlive: true,
            hometown: "Ely, UK",
            movie: movie4._id
        },
        {
            name: "Richard Harris",
            age: 72,
            stillAlive: false,
            hometown: "London, UK",
            movie: movie4._id
        },
        {
            name: "Vin Diesel",
            age: 56,
            stillAlive: true,
            hometown: "Alameda County, CA",
            movie: movie5._id
        },
        {
            name: "Paul Walker",
            age: 40,
            stillAlive: false,
            hometown: "Santa Clarita, CA",
            movie: movie5._id
        },
        {
            name: "Michelle Rodriguez",
            age: 45,
            stillAlive: true,
            hometown: "San Antonio, TX",
            movie: movie5._id
        }
    ]

    await Actor.insertMany(actors)
    console.log('Created actors!')
    

    const reviews = [
        {
            score: 9,
            comment: "This is Bill Murray's best work since Ghostbusters, at least as far as comedy goes.",
            movie: movie1._id
        },
        {
            score: 10,
            comment: "Hysterical! A film that can be watched over and over.",
            movie: movie1._id
        },
        {
            score: 8,
            comment: "Its central performances are phenomenal and its inevitable emotional release is truly powerful.",
            movie: movie2._id
        },
        {
            score: 9,
            comment: "A sensitive, remarkable look at genius",
            movie: movie2._id
        },
        {
            score: 6,
            comment: "It is really funny, but suffers from feeling like one sketch after the other",
            movie: movie3._id
        },
        {
            score: 9,
            comment: "Ridiculously funny comedy",
            movie: movie3._id
        },
        {
            score: 10,
            comment: "Excellent, dramatic and powerful. Revenge served cold.",
            movie: movie4._id
        },
        {
            score: 7,
            comment: "A joy ride of entertainment.. one quarter mile at a time",
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

run ()
