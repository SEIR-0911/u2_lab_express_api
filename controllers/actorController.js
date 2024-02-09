const Actor = require('../models/actor')

module.exports = {
    getAllActors,
    getOneActor,
    createActor,
    updateActor,
    deleteActor
}

async function deleteActor(req, res) {
    try {
        const id = req.params.id
        let actor = await Actor.findByIdAndDelete(id)
        if (actor) {
            return res.status(200).json(actor)
        }
        throw new Error("Actor not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateActor(req, res) {
    try {
        const id = req.params.id
        let actor = await Actor.findByIdAndUpdate(id, req.body, { new: true })
        if (actor) {
            return res.status(200).json(actor)
        }
        throw new Error("Actor not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getAllActors(req, res) {
    try {
        const actors = await Actor.find()
        res.json(actors)
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

async function getOneActor(req, res) {
    try {
        const id = req.params.id
        const actor = await Actor.findById(id)
        if (actor) {
            return res.json(actor)
        }
        return res.status(404).send('Actor with specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createActor(req, res) {
    try {
        const actor = await new Actor(req.body)
        await actor.save()
        return res.status(201).json({
            actor
        })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}