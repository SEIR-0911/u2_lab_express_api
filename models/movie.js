const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: {type:String, required:true},
        runtime_mins: {type: Number, required: true},
        rating: {type: String, required: true},
        release_year: {type: Number, required: true},
        desc: {type:String, required: true}
    },
    {timestamps: true},
)


module.exports = movieSchema