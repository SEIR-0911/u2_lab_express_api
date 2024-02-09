const Review = require('../models/review');

module.exports = {
    getAllReviews,
    getOneReview,
    createReview,
    updateReview,
    deleteReview
}

async function deleteReview(req, res) {
    try {
        const id = req.params.id
        let review = await Review.findByIdAndDelete(id)
        if (review) {
            return res.status(200).json(review)
        }
        throw new Error("Review not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateReview(req, res) {
    try {
        const id = req.params.id
        let review = await Review.findByIdAndUpdate(id, req.body, { new: true })
        if (review) {
            return res.status(200).json(review)
        }
        throw new Error("Review not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getAllReviews(req, res) {
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

async function getOneReview(req, res) {
    try {
        const id = req.params.id
        const review = await Review.findById(id)
        if (review) {
            return res.json(review)
        }
        return res.status(404).send('Review with specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createReview(req, res) {
    try {
        const review = await new Review(req.body)
        await review.save()
        return res.status(201).json({
            review
        })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}