const {Movie} = require('../models')

module.exports = {
    getAllMovies,
    getOneMovie
}

async function getAllMovies(req, res){
    try{
        const movies = await Movie.find()
        return res.json(movies)
    } catch(e) {
        return res.status(500).send('Server error')
    }
}

async function getOneMovie(req,res){
    try{
        const input = req.params.title
        const movie = await Movie.findOne({title: input})
        console.log(movie)
        if(movie){
            return res.json(movie)
        }
        return res.status(404).send('This database is too small for that')
    } catch(e){
        return res.status(500).send('Server error')
    }
}