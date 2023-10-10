const { Schema } = require('mongoose')

const moviesSchema = new Schema(
    {
        title: {type: String, required: true},
        runTime: {type: String, required: true},
        releaseDate: {type: String, required: true},
        rating: {type: String, required: true},
        description: {type: String, required: true}

    },
    {timestamps: true}

)

module.exports = moviesSchema