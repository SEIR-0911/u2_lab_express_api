const Movie = require('../models/movies')

const getAllMovies = async (req,res) => {
    try {
        const movies = await Movie.find()
        return res.json(movies)
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllMovies,
}