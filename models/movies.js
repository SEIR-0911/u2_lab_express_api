const { Schema } = require('mongoose')


const movieSchema = new Schema(
   {
      title: { type: String, required: true },
      duration: { type: String, required: true },
      rating: { type: String, required: true },
      releaseDate: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      actors: [{ type: Schema.Types.ObjectId, ref: 'Actor'}]
   }, 

   { timestamps: true })



   module.exports = movieSchema