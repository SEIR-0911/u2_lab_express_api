const { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
      score: { type: Number, min:[1, "Rating must be 1 or above."], max:[5, "Rating must be 5 or below"] },
      comment: { type: String, required: true },
      movie: { type: Schema.Types.ObjectId, ref: 'Movie' }
    },
    { timestamps: true }
  )
  
  module.exports = reviewSchema