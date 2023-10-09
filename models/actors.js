const { Schema } = require('mongoose')

const actorsSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true }, 
        is_alive: { type: Boolean, required: true },
        image: { type: String, required: true },
        movies: [{ movieID: { type: Schema.Types.ObjectId, ref: 'Movie' } }]
    },
    { timestamps: true }
);

module.exports = actorsSchema
