const { Review } = require('../models')

module.exports = {
    getAllReviews,
    getOneReview,
    createReview,
    updateReview,
    deleteReview
}

async function getAllReviews(req,res){
    try{
        const reviews = await Review.find()
        reviews.sort(function(reviewA,reviewB){return reviewB.stars - reviewA.stars}) //https://www.w3schools.com/js/js_array_sort.asp descending order
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

async function createReview(req, res) {
    try {
        const review = new Review(req.body)
        await review.save()
        return res.status(201).json({
            review
        })
    }catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateReview(req,res){
    try{
        const id = req.params.id
        const review = await Review.findByIdAndUpdate(id, req.body, {new: true})
        if (review) {
            return res.status(200).json(review)
        }
        throw new Error('Review not found')
    } catch(e){
        return res.status(500).send(e.message)
    }
}

async function deleteReview(req,res){
    try{
        const id = req.params.id
        const review = await Review.findByIdAndDelete(id)
        if (review){
            return res.status(200).json(review)
        }
        throw new Error ('Review not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}