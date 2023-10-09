//index.js creates the models for the schemas.
//This is what will need to be accessed from the Models folder going forward.
const mongoose = require("mongoose");
const ActorSchema = require("./Actor");
const ReviewSchema = require("./Review");
const MovieSchema = require("./Movie");

const Actor = mongoose.model("Actor", ActorSchema);
//Here, a Mongoose model for the "airport" collection is created. The mongoose.model method is used to define a model. It takes two arguments:
//'Actor': The first argument specifies the name of the MongoDB collection where documents with this schema will be stored. In this case, it's "airport."
//actorSchema: The second argument is the schema that defines the structure and validation rules for documents in the "airport" collection.
const Review = mongoose.model("Review", ReviewSchema);
const Movie = mongoose.model("Movie", MovieSchema);

module.exports = {
  Actor,
  Review,
  Movie,
};
// This line exports the Mongoose models you've created, allowing you to use them in other parts of your Node.js application.
