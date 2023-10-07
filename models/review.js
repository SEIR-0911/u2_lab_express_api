const  { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        comment: { type: String, required: true },
        score: { 
            type: Number, 
            required: true,
            min: [0, `Must be a whole number between 0 and 100`],
            max: [100, `Must be a whole number between 0 and 100`],
            validate: {
                validator: function(v) {
                    return Number.isInteger(v) == true
                },
                message: `Must be a whole number between 0 and 100`
            }
         },
    },
    { timestamps: true },
)

module.exports = reviewSchema


//https://mongoosejs.com/docs/validation.html#built-in-validators
//https://kb.objectrocket.com/mongo-db/how-to-use-mongoose-custom-validators-923
