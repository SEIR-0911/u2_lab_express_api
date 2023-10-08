const { Actor } = require('../models')

module.exports = {
    getAllActors,
    getOneActor
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