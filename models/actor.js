
const { Schema } = require('mongoose')

const actorSchema = new Schema(
    {
        name: { type: String, required: true },
        age : { type: Number, required: true },
        alive: { type: Boolean, required: true },
        movies: [{ type: Schema.Types.ObjectId, ref: 'Movie'}],
        photo: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = actorSchema