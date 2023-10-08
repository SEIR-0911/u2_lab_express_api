const Review = require('../models/reviews')

const getAllReviews = async (req,res) => {
    try {
        const reviews = await Review.find()
        return res.json(reviews)
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getReviewById = async (req, res) => {
    try {
        const id = req.params.id
        const review = await Review.findById(id)
        if(review) {
            return res.json(review)
        }
        res.status(404).send('Review not found, try another ID!')
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const sortReviews = async (req, res) => {
    try {
        const score = req.params.score
        const review = await Review.find(score).sort( { score: 'desc' } )
        if(review) {
            return res.json(review)
        }
        res.status(404).send('Cannot sort')
    } catch(e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllReviews,
    getReviewById,
    sortReviews,
}