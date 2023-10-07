const  { Schema } = require('mongoose')

const actorSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true, min: 0 },
        alive: { type: Boolean, required: true },
        picURL: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = actorSchema
