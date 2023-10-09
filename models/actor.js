const { Schema } = require('mongoose');

const Actor = new Schema(
    {
        act_id: { type: Number, required: true },
        name: { type: String, required: true },
        age: { type: Number, required: true },
        stillAlive: { type: Boolean, required: true },
        url: { type: String }
    },
    { timestamps: true }
);

module.exports = Actor;