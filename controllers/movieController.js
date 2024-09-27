const { Movie } = require('../models')

module.exports = {
    getAllMovies,
    getOneMovie,
    createMovie,
    updateMovie,
    deleteMovie,
}

async function getAllMovies(req, res) {
    try {
        const movies = await Movie.find()
        movies.sort(function (movieA, movieB) { return movieB.release_year - movieA.release_year })
        return res.json(movies)
    } catch (e) {
        return res.status(500).send('Server error')
    }
}

async function getOneMovie(req, res) {
    try {
        const input = req.params.title
        const movie = await Movie.findOne({ title: input })
        console.log(movie)
        if (movie) {
            return res.json(movie)
        }
        return res.status(404).send('This database is too small for that')
    } catch (e) {
        return res.status(500).send('Server error')
    }
}

async function updateMovie(req,res){
    try{
        const input = req.params.title
        const movie = await Movie.findOneAndUpdate({title: input}, req.body, {new: true})
        if (movie) {
            return res.status(200).json(movie)
        }
        throw new Error('Movie not found')
    } catch(e){
        return res.status(500).send(e.message)
    }
}

async function createMovie(req, res) {
    try {
        const movie = new Movie(req.body)
        await movie.save()
        return res.status(201).json({
            movie
        })
    }catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteMovie(req,res){
    try{
        const input = req.params.title
        const movie = await Movie.findOneAndDelete({title: input})
        if (movie){
            return res.status(200).json(movie)
        }
        throw new Error ('Movie not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}