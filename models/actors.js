const { Schema } = require('mongoose')

const actorSchema = new Schema(
    {
        name: { type: String, required: true },
        birthday: { type: String, required: true },
        alive: { type: Boolean, required: true },
        image: { type: String, required: true },
        movies: [{ movieId: { type: Schema.Types.ObjectId, ref: 'Movie' }}]
    },
    { timestamps: true }
)

module.exports = actorSchema