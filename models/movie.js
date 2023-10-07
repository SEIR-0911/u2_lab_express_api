const { Schema } = require('mongoose')

const movieSchema = new Schema({
    title: {type: String, required: true},
    runtime: {type: Number, required: true},
    rating: {type: Number, required: true},
    release: {type: Number, required: true},
    description: {type: String, required: true}
},
{
    timestamps: true,
})

module.exports = movieSchema
// module.exports = mongoose.model('Movie', movieSchema)
