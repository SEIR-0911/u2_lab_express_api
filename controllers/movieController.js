const Movie = require('../models/movies')

const getAllMovies = async (req,res) => {
    try {
        const movies = await Movie.find()
        return res.json(movies)
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getMovieById = async (req,res) => {
    try {
        const id = req.params.id
        const movie = await Movie.findById(id)
        if(movie) {
            return res.json(movie)
        }
        res.status(404).send('Movie not found, try another ID!')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const sortMovies = async (req, res) => {
    try {
        const movie = await Movie.find().sort( { yearReleased: 'asc' } )
        if(movie) {
            return res.json(movie)
        }
        res.status(404).send('Movie not sorted.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    sortMovies,
}