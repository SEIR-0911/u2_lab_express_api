const Movie = require('../models/movie');

module.exports = {
    getAllMovies,
    getOneMovie,
    createMovie,
    updateMovie,
    deleteMovie
}

async function deleteMovie(req, res) {
    try {
        const id = req.params.id
        let movie = await Movie.findByIdAndDelete(id)
        if (movie) {
            return res.status(200).json(movie)
        }
        throw new Error("Movie not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateMovie(req, res) {
    try {
        const id = req.params.id
        let movie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
        if (movie) {
            return res.status(200).json(movie)
        }
        throw new Error("Movie not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getAllMovies(req, res) {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

async function getOneMovie(req, res) {
    try {
        const id = req.params.id
        const movie = await Movie.findById(id)
        if (movie) {
            res.json(movie)
        }
        return res.status(404).send('Movie with specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createMovie(req, res) {
    try {
        const movie = await new Movie(req.body)
        await movie.save()
        return res.status(201).json({
            movie
        })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}