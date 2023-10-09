const { Actor }  = require('../models');

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find()
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneActor(req, res) {
    try {
        const id = req.params.id
        const actor = await Actor.findById(id)
        if (actor) {
            return res.json(actor)
        }
        return res.status(404).send('actor with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createActor(req,res) {
    try {
        const actor = await new Actor (req.body)
        await actor.save()
        return res.status(201).json({
            actor
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateActor(req,res) {
    try {
        const id = req.params.id
        const actor = await Actor.findByIdAndUpdate(id, req.body, {new: true})
        if (actor) {
            return res.status(200).json(actor)
        }
        throw new Error('actor not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteActor(req,res) {
    try {
        const id = req.params.id
        const actor =  await Actor.findByIdAndDelete(id)
        if (actor) {
            return res.status(200).json(actor)
        }
        throw new Error('actor not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

module.exports = {
    getAllActors,
    getOneActor,
    createActor,
    updateActor,
    deleteActor
}
