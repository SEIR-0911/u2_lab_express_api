const { Review } = require('../models')

module.exports = {
    getAllReviews,
    getReview
}

async function getAllReviews (req, res){
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getReview(req,res) {
    try {
        const id = req.params.id
        const review = await Review.findById(id)
        if (review) {
            return res.json(review)
        } 
        return res.status(404).send(`${Actor} must not be a real actor`)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}