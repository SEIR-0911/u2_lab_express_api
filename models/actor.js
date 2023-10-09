const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const actorSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        stillAlive: { type: Boolean, required: true },
        hometown: { type: String, required: true },
        movie: { type: Schema.Types.ObjectId, ref: 'Movie' }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Actor', actorSchema)