const { Schema } = require('mongoose');

const Actor = new Schema(
    {
        name: { type: String, required: true },
        stillAlive: { type: Boolean, required: true },
        url: { type: String }
    },
    { timestamps: true }
);

module.exports = Actor;