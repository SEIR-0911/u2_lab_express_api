const { Schema } = require('mongoose')

const reviewsSchema = new Schema(
    {
        score: {type: String, required: true},
        comment: {type: String, required: true}
    },
    {timestamps: true}

)

module.exports = reviewsSchema