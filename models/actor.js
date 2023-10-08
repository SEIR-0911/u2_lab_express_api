const mongoose = require('mongoose')
//GET SCHEMA FROM MONGOOSE LIBRARY
const {Schema} = require('mongoose')

//ACTOR SCHEMA MODEL
const actorSchema = new Schema(
    {
        name:  {type: String, required: true},
        age: {type: Number, required: true},
        alive: {type: Boolean, required: true},
        movie: [{type: Schema.Types.ObjectId, ref: 'Movie'}],
        image: {type: String},
    },
    {
        timestamps: true
    },
)

//CREATE 'Actor' COLLECTION IN DB & EXPORT.
module.exports = mongoose.model('Actor', actorSchema)