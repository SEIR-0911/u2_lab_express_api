const { Schema } = require('mongoose')

const reviewSchema = new Schema({
    reviewer: { type: String, required: true },
    score: { type: Number, required: true},
    comment: { type: String, required: true },
    movie: { type: Schema.Types.ObjectId, ref: 'Movie' }  
}, {timestamps: true}
)

module.exports = reviewSchema