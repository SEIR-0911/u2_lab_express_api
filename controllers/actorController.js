const { Actor } = require('../models')

module.exports = {
    getAllActors,
    getOneActor,
    createActor,
    updateActor,
    deleteActor
}

async function getAllActors(req,res){
    try{
        const actors = await Actor.find()
        return res.json(actors)
    } catch(e){
        return res.status(500).send('Server error')
    }
}

async function getOneActor(req,res){
    try{
        const input = req.params.name
        const actor = await Actor.findOne({name: input})
        if(actor){
            return res.json(actor)
        }
        return res.status(400).send('This database is to small for that')
    } catch (e) {
        return res.status(500).send('Server error')
    }
}

async function createActor(req, res) {
    try {
        const actor = new Actor(req.body)
        await actor.save()
        return res.status(201).json({
            actor
        })
    }catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateActor(req,res){
    try{
        const input = req.params.name
        const actor = await Actor.findOneAndUpdate({name: input}, req.body, {new: true})
        if (actor) {
            return res.status(200).json(actor)
        }
        throw new Error('Actor not found')
    } catch(e){
        return res.status(500).send(e.message)
    }
}

async function deleteActor(req,res){
    try{
        const input = req.params.name
        const actor = await Actor.findOneAndDelete({name: input})
        if (actor){
            return res.status(200).json(actor)
        }
        throw new Error ('Actor not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}