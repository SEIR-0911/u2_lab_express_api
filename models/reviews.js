const mongoose = require('mongoose')
//GET SCHEMA FROM MONGOOSE LIBRARY
const{Schema} = require('mongoose')

//REVIEW SCHEMA MODEL
const reviewSchema = new Schema(
    {
        score: {type: Number, 
                min: 1,
                max: 5, 
                required: true},
        comment: {type: String, required: true},
        movie: {type: Schema.Types.ObjectId, ref: 'Movie'}
    },
    {
        timestamps: true,
    }
)

//CREATE 'Review' COLLECTION IN DB & EXPORT.
module.exports = mongoose.model('Review', reviewSchema)