const db = require('../db')
const { Movie, Actor, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const movie1 = await new Movie({
        name: 'Titanic',
        releaseDate: '2001',
        runTime: '3:14',
        discription: 'Adventure',
        rating: '5'
    })
    movie1.save()

    const movie2 = await new Movie({
        name: 'Gold Standard',
        releaseDate: '2006',
        runTime: '2:13',
        discription: 'Action',
        rating: '4'
    })
    movie2.save()

    const movie3 = await new Movie({
        name: 'Blood Daimond',
        releaseDate: '2007',
        runTime: '2:53',
        discription: 'Action',
        rating: '5'
    })
    movie3.save()

    const movie4 = await new Movie({
        name: 'Grudge',
        releaseDate: '2009',
        runTime: '3:04',
        discription: 'Horror',
        rating: '5'
    })
    movie4.save()

    // const review1 = await new Review({
    //     score: movie4._id,  
    // })
    // review1.save()

    // const review2 = await new Review({
    //     score: movie2._id 
    // })
    // review2.save()

    // const review3 = await new Review({
    //     score: movie3._id
    // })
    // review3.save()

    // const review4 = await new Review({
    //     score: movie1._id
    // })
    // review4.save()

    const actors = [
        {
          name: 'Jonh Petter',
          age: '32',
          height: '172cm',
          stillAlive: true,
          bestMovie: movie2._id
        },
         
        {
           name: 'Petter Marks',
           age: '46',
           height: '173cm',
           stillAlive: true,
           bestMovie: movie4._id
        },

        {
           name: 'Carly Smith',
           age: '29',
           height: '168cm',
           stillAlive: true,    
           bestMovie: movie3._id
        },

        {
            name: 'Simon Parks',
            age: '83',
            height: '156cm',
            stillAlive: false,
            bestMovie: movie1._id
        },

        {
            name: 'Paul Rutterberg',
            age: '53',
            height: '174cm',
            stillAlive: true,
            bestMovie: movie2._id
        },

        {
            name: 'Kelsey Petterson',
            age: '32',
            height: '176cm',
            stillAlive: true,
            bestMovie: movie3._id
        },

        {
            name: 'Paula Rogers',
            age: '43',
            height: '161cm',
            stillAlive: false,
            bestMovie: movie2._id
        },

        {
            name: 'Roger Bills',
            age: '51',
            height: '173cm',
            stillAlive: true,
            bestMovie: movie1._id
        }
    ]

    const reviews = [
        {score: movie4._id
        },
        {
         score: movie2._id
        },
        {
         score: movie3._id
        },
        {
         score: movie1._id
        }
    ]


await Movie.insertMany(movies)
console.log('Created Movies') 
}

const run = async () => {
    await main()
    db.close()
}
run()

    
























