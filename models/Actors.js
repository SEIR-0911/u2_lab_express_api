const { Schema } = require('mongoose');

const ActorSchema = new Schema({
  name: { type: String, required: true },
  birthday: { type: String, required: true },
  deceased: { type: Boolean, required: true },
  imageURL: { type: String, required: true },
}, { timestamps: true });

module.exports = ActorSchema;
