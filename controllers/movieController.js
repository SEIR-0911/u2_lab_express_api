const { Movie } = require('../models')

module.exports = {
    getAllMovies,
    getMovie
}

async function getAllMovies (req, res){
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getMovie(req,res) {
    try {
        const id = req.params.id
        const movie = await Movie.findById(id)
        if (movie) {
            return res.json(movie)
        } 
        return res.status(404).send(`${Actor} must not be a real actor`)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}