const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const actorSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: String, required: true },
        isAlive: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Actor', actorSchema)