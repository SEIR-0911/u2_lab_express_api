const { Review } = require('../models')

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const getOneReview = async (req, res) => {
    try {
        const { id } = req.params
        const review = await Review.findById(id)
        review ? res.json(review) : res.status(404).send('Review not added to the NCU')
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllReviews,
    getOneReview
}