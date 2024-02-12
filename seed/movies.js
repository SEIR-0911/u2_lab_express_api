const db = require('../db')
const Movie = require('../models/movie')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [
        {
            title: "The Dark Knight",
            description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
            yearReleased: 2008,
            runTime: 152, // in minutes
            rating: "PG-13",
            genre: "Action, Crime, Drama",
            image: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080", // Placeholder, replace with actual image URL
        },
        {
            title: "Prisoners",
            description: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands.",
            yearReleased: 2013,
            runTime: 153, // in minutes
            rating: "R",
            genre: "Crime, Drama, Mystery",
            image: "https://m.media-amazon.com/images/I/91DcIBY-2UL._AC_UF894,1000_QL80_.jpg", // Placeholder, replace with actual image URL
        },
        {
            title: "Superbad",
            description: "Two high school seniors try to impress girls by creating a epic party.",
            yearReleased: 2007,
            runTime: 119, // in minutes
            rating: "R",
            genre: "Comedy",
            image: "https://m.media-amazon.com/images/M/MV5BY2VkMDg4ZTYtN2M3Yy00NWZiLWE2ODEtZjU5MjZkYWNkNGIzXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg", // Placeholder, replace with actual image URL
        }
    ]    

    try {
        await Movie.insertMany(movies)
        console.log('Movies seeded successfully')
    } catch (error) {
        console.error('Error seeding movies:', error.message)
    }
}
const run = async () => {
    await main()
    db.close()
}
run()
