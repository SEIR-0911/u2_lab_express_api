const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        score: { 
            type: Number, 
            required: true,
            min: 1,
            max: 5,
            validate: {
                validator: function(val) {
                    return Number.isInteger(val) == true
                },
            }
        },
        comment: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Review', reviewSchema)