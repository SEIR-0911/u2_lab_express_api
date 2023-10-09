const { Movie, Actor, Review } = require(`../models/index`)

module.exports = {
    getAll,
    getByID,
    getScoreHighToLow
}

async function getAll (req,res) {
    try {
        const reviews = await Review.find()
        res.status(201).send(reviews)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getByID (req,res) {
    try {
        const review = await Review.findById(req.params.id)
        res.status(201).send(review)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getScoreHighToLow (req,res) {
    try {
        const reviews = await Review.find().sort({ score: `desc` })
        res.status(201).send(reviews)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}