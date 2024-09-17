const db = require('../db/index')
const { Movie, Actor, Review } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const  main = async () => {
    const movie1 = await new Movie({
        title: 'Barbie',
        runtime: 114,
        rating:  7.1, 
        yearReleased: 2023,
        description: 'The most popular of all the Barbies in Barbieland, begins experiencing an existential crisis. She must travel to the human world in order to understand herself and discover her true purpose.',
        image: 'https://clownfishtv.com/wp-content/uploads/2023/07/BarbieMovieReview_MainPic.jpg'
    })
    movie1.save()

    const movie2 = await new Movie({
        title: 'Avatar',
        runtime: 162,
        rating:  7.9, 
        yearReleased: 2009,
        description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
        image: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ1cKFVOpdVZUwqTxGf39TETI0OV4oUndFrzzAzSu8IOP4p-hVF2ErA9heqqjQ9BUWy'
    })
    movie2.save()


    const movie3 = await new Movie({
        title: 'Titanic',
        runtime: 194,
        rating:  7.9, 
        yearReleased: 1997,
        description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
        image: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg'
    })

    movie3.save()

    const movie4 = await new Movie({
        title: 'Maid of Honor',
        runtime: 101,
        rating:  5.8, 
        yearReleased: 2008,
        description: 'A guy in love with an engaged woman tries to win her over after she asks him to be her maid of honor.',
        image: 'https://m.media-amazon.com/images/M/MV5BMTk1MzA5MjEzMF5BMl5BanBnXkFtZTcwNTk0MjU1MQ@@._V1_.jpg'
    })
    movie4.save()

    const actors = [
    {
        name: 'Sam Worthington',
        age: 47,
        Status: 'Alive',
        movie: movie2._id
    },
    {
        name: 'Ryan Gosling',
        age: 42,
        Status: 'Alive',
        movie: movie1._id
    },
    {
        name: 'Margot Robbie',
        age: 33,
        Status: 'Alive',
        movie: movie1._id
    },
    {
        name: 'Kate Winslet',
        age: 48,
        Status: 'Alive',
        movie: movie3._id
    },
    {
        name: 'Leonardo Dicapprio',
        age: 48,
        Status: 'Alive',
        movie: movie3._id
    },
    {
        name: 'Patrick Dempsey',
        age: 57,
        Status: 'Alive',
        movie: movie4._id
    },
    {
        name: 'Michelle Monaghan',
        age: 47,
        Status: 'Alive',
        movie: movie4._id
    },
    ]

    const reviews = [
    {
        reviewer: 'Sanad Abunwar',
        score: '5',
        comment:  'Barbie 2023 is a true masterpiece that surpasses all expectations. It is a film that will make you believe in magic, ignite your imagination, and remind you of the sheer beauty and power of the human spirit. Every aspect, from the stellar acting performances to the awe-inspiring visuals and the unforgettable soundtrack, is flawlessly executed, making it an instant classic for generations to come.',
        movie: movie1._id
    },
    {
        reviewer: 'Allison Apel',
        score: '5',
        comment:  'The plot, the CGI effects, the acting, the symbolism, and the elements of spirituality all tied in to create the most beautiful and captivating cinematic experience. Yes, its basically a sci-fi version of Pocahontas, but who cares?! There is a perfect amount of humor, drama, conflict, and action to keep you engaged from start to finish. I could honestly talk about this movie for hours, but I intend to keep this fairly brief. James Cameron outdid himself with this one, and after many years of patiently waiting I am BEYOND thrilled to see the next movies. I think theyre going to be absolutely amazing.',
        movie: movie2._id
    },
    {
        reviewer: 'Tim Stoofcarb',
        score: '4',
        comment:  'This movie is a masterpiece, everything is perfectly and beautifully shot and well acted. The way they recreated the interior of the ship is near perfect and reflects the sheer beauty of the Titanic. De Caprio and Kate Winslet shine throughout with super onscreen chemistry. The dinner scene in where De caprio joins the rich people is the only part where I found it distracting as the salads on the table looked incredibly fake, i may be wrong but it looked like they used bits of carpet for lettuce, it really took me out of the movie, anyway i knocked a star off for that reason. Billy Zane was absolutely wonderful in this film, he originally auditioned for the roll of the waiter to which he had no speaking lines, he made the right choice. The CGI in the final act is sublime, James Camerons direction on the devastating disaster is one of the best ive seen, sad ending as Lio couldnt fit on the floating door, I cried for 17 minutes exactly. Anyway fantastic movie.',
        movie: movie3._id
    },
    {
        reviewer: 'Joanne Carter',
        score: '4',
        comment:  'Great chick flick. Patrick Dempsey is gorgeous and a great leading man. He looks handsome in a tux too. Of course we know how it will end, but its fun getting there. Good actors and well done. Not the best film ever made, but it passed time and its easy to watch.',
        movie: movie4._id
    }
    ]


    await Actor.insertMany(actors)
    console.log('Created actors!')

    await Review.insertMany(reviews)
    console.log('Created reviews!')

}

const run = async () => {
    await main()
    db.close()
}
run()