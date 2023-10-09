const { Schema } = require('mongoose')

const actorSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    status: { type: String, required: true },
    movie: { type: Schema.Types.ObjectId, ref: 'Movie' }
}, { timestamps: true }
)

module.exports = actorSchema