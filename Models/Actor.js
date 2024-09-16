const { Schema } = require("mongoose");
//this connects to mongoose for this file

const ActorSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    alive: { type: Boolean, required: true },
    movie: { type: Schema.Types.ObjectId, ref: "Movie._id", required: true },
  },
  { timestamps: true }
);

module.exports = ActorSchema;
