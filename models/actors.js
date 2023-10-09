// create schemas for Actors/Movies/Reviews

const { Schema } = require('mongoose')

const actorsSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: String, required: true },
        is_alive: { type: Boolean, required: true },
        image: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = actorsSchema