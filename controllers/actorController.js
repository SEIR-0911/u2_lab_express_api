const { Movie, Actor, Review } = require(`../models/index`)

module.exports = {
    getAll,
    getByID,
    deleteActor
}

async function getAll (req,res) {
    try {
        const actors = await Actor.find()
        res.status(201).send(actors)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getByID (req,res) {
    try {
        const actor = await Actor.findById(req.params.id)
        res.status(201).send(actor)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function deleteActor (req, res) {
    try {
        const actorID = req.params.id
        const checkDelete = await Actor.findByIdAndDelete(actorID)
        if (checkDelete) {
            await Movie.updateMany( {} , {$pullAll: { actors: [actorID] } } )
            return res.status(200).send(`Actor deleted`)}
        throw new Error(`Actor not found`)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

