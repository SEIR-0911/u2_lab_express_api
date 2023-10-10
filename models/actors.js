const { Schema } = require('mongoose')

const actorsSchema = new Schema(
    {
        name: {type: String, required: true},
        age: {type: String, required: true},
        height: {type: String, required: true},
        stillAlive: {type: Boolean, required: true}
    },
    { timestamps: true }
)

module.exports = actorsSchema