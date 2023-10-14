const { Actor } = require('../models')

const getAllActors = async (req, res) => {
   try {
      const actors = await Actor.find({})
      res.json(actors)
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const getOneActor = async (req, res) => {
   try {
      const { name } = req.params
      console.log(name)
      const actor = await Actor.findOne({name: name})
      .populate('movies')
      .exec()
      console.log(actor)
      if (actor) {
         return res.json(actor)
      }
      return res.status(404).send('Actor cannot be found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const createActor = async (req, res) => {
   try{
   const actor = await new Actor(req.body)
   await actor.save()
   return res.status(201).json({
      actor,
   })
   } catch (e) {
      return res.status(500).json({ error: e.message })
   }
}

const updateActor = async (req, res) => {
   try {
      let id = req.params.id
      let actor = await Actor.findByIdAndUpdate(id, req.body, { new: true })
      if (actor) {
         return res.status(200).json(actor)
      }
      throw new Error('Actor not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const deleteActor = async (req, res) => {
   try {
      const id = req.params.id
      let actor = await Actor.findByIdAndDelete(id)
      if (actor) {
         return res.status(200).json(actor)
      }
      throw new Error('Actor not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}


module.exports = {
   getAllActors,
   getOneActor,
   createActor,
   updateActor,
   deleteActor
}