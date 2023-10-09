const { Actor } = require('../models')

module.exports = {
    getActors,
    getActor
}

async function getActors(req, res) {
    try {
        const actors = await Actor.find()
        res.json(actors)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getActor(req,res) {
    try {
        const id = req.params.id
        const actor = await Actor.findById(id)
        if (actor) {
            return res.json(actor)
        } 
        return res.status(404).send(`${Actor} must not be a real actor`)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}