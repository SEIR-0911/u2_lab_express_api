const { Movie } = require('../models')

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getOneMovie = async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findById(id)
        movie ? res.json(movie) : res.status(404).send('Movie not added to the NCU')
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllMovies,
    getOneMovie
}