const { Movie, Actor, Review } = require(`../models/index`)

module.exports = {
    getAll,
    getByID,
    getSortNewToOld,
    addReviews,
    aggregateReviewScores
}

async function getAll (req,res) {
    try {
        const movies = await Movie.find()
        res.status(201).send(movies)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getByID (req,res) {
    try {
        const movie = await Movie.findById(req.params.id)
        res.status(201).send(movie)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getSortNewToOld (req,res) {
    try {
        const movies = await Movie.find().sort({ releaseYear: `desc` })
        res.status(201).send(movies)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function addReviews (req,res) {
    try {
        // const newReviewIDs = [
        //     "652142a364b8c967e2d56737", 
        //     "652142a364b8c967e2d5673a"
        // ]

        let updatedMovie = await Movie.findByIdAndUpdate(
            req.params.movID, 
            {$push: {reviews : req.params.revID }}
        )

        res.status(201).send(updatedMovie)

    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}
 async function aggregateReviewScores (req,res) {
    try {
        let movie = await Movie.findById(req.params.id)
        let reviewsArray = movie.reviews
        let scoresArray = new Array
        console.log(reviewsArray)
        for (let i = 0; i<reviewsArray.length; i++) {
            let review = await Review.findById(reviewsArray[i])
            scoresArray.push(review.score)
        }
        console.log(scoresArray)
        let newRating = (scoresArray.reduce((prev, current) => prev + current) / scoresArray.length)
        console.log(newRating)
        await Movie.findByIdAndUpdate(req.params.id, {rating: newRating} )

        // movie.rating = newRating
        // console.log(movie)
        res.status(201).send("rating updated based on review scores")
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
 }