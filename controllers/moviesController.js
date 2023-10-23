const Movie = require('../models/Movie');

module.exports = {
    getAllMovies,
    getOneMovie,
    createMovie,
    updateMovie,
    deleteMovie
}

async function deleteMovie(req, res){
    try{
        const { id } = req.params;
        const deleted = await Movie.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Movie deleted");
        }
        throw new Error("Movie not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function updateMovie(req, res){
    try{
        const id = req.params.id
        const Movie = await Movie.findByIdAndUpdate(id, req.body, {new: true})
        if(Movie){
            return res.status(200).json(Movie)
        }
        throw new Error('Movie not found')
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

// const getAllMovies = async (req, res) => { // cant use a variable untill decleared
    async function getAllMovies(req, res) { // This allows you to hoist your function (use it anywhere) in code
    try {
        const Movies = await Movie.find()
        return res.json(Movies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// const getOneMovie = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const Movie = await Movie.findById(id)
//         if (Movie) {
//             res.json(Movie);
//         }
//         return res.status(404).send('Movie with the specified ID does not exists');
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

// function expression
async function getOneMovie(req, res) {
    try{
        const id = req.params.id
        const Movie = await Movie.findById(id)
        if(Movie){
            return res.json(Movie)
        }
        return res.status(404).send('Movie with specified ID does not exsits.')
    }catch (error){
        return res.status(500).send(error.message)
    }
}

async function createMovie(req, res) {
    try {
        const Movie = await new Movie(req.body)// takes the data of the Movie and creates a new Movie
        await Movie.save()
        return res.status(201).json({
            Movie
        })
    }catch (error){
        return res.status(500).send(error.message)
    }
}

