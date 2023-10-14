const { Schema } = require('mongoose')

const reviewSchema = new Schema(
   {
      score: { type: String, required: true }, 
      title: { type: String, required: true },
      description: { type: String, required: true },
      movies: { type: Schema.Types.ObjectId, ref: 'Movie'}
   },   

   { timestamps: true })

   module.exports = reviewSchema