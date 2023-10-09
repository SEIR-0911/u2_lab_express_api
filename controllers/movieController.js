const Movie = require('../models/movies')

const getAllMovies = async (req,res) => {
    try {
        const movies = await Movie.find()
        return res.json(movies)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getOneMovie = async (req,res) => {
    try {
        const id = req.params.id
        const movie = await Movie.findById(id)
        if (movie) {
            return res.json(movie)
        }
        return res.status(404).send('Movie with specified ID does not exist')
    } catch (e) {
        console.log(e.message)
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllMovies,
    getOneMovie
}