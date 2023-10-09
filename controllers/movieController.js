const Movie = require('../models/movies')

const getAllMovies = async (req,res) => {
    try {
        const movies = await Movies.find()
        return res.json(moives)
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
        return res.status(404).send('Review with specified ID does not exist')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllMovies,
    getOneMovie
}