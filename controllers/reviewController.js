const { Review } = require('../models')

module.exports = {
    getAllReviews,
    getOneReview
}

async function getAllReviews(req,res){
    try{
        const reviews = await Review.find()
        return res.json(reviews)
    } catch(e){
        return res.status(500).send('Server error')
    }
}

async function getOneReview(req,res){
    try{
        const id = req.params.id
        const review = await Review.findById(id)
        if (review) {
            return res.json(review)
        }
        return res.status(400).send('This database is too small for that')
    } catch (e) {
        return res.status(500).send('Server error')
    }
}