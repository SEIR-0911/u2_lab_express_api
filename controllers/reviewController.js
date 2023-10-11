const Review = require('../models/reviews')

const getAllReviews = async (req,res) => {
    try {
        const reviews = await Review.find()
        return res.json(reviews)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getOneReview = async (req,res) => {
    try {
        const id = req.params.id
        const review = await Review.findById(id)
        if (review) {
            return res.json(review)
        }
        return res.status(404).send('Review with specified ID does not exist')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
module.exports = {
    getAllReviews,
    getOneReview
}