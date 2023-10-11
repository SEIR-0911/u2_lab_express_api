const Actor = require('../models/actors')

const getAllActors = async (req,res) => {
    try {
        const actors = await Actor.find()
        return res.json(actors)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getOneActor = async (req,res) => {
    try {
        const id = req.params.id
        const actor = await Actor.findById(id)
        if (actor) {
            return res.json(actor)
        }
        return res.status(404).send('Actor with specified ID does not exist')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllActors,
    getOneActor
}