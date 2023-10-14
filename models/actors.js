const { Schema } = require('mongoose')

const actorSchema = new Schema(
   {
      name: { type: String, required: true },
      age: { type: Number, required: true },
      location: { type: String, required: true },
      stillAlive: { type: Boolean, required: true }, 
      movieGenre: { type: String, required: true },
      image: { type: String, required: true },
      movies: [{ type: Schema.Types.ObjectId, ref: 'Movie'}]
   },

   { timestamps: true })



   module.exports = actorSchema