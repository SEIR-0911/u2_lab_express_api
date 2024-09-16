const { Review } = require("../Models");

module.exports = {
  getAllReviews,
  getOneReview,
};

async function getAllReviews(req, res) {
  try {
    res.json(await Review.find());
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getOneReview(req, res) {
  try {
    res.json(Review.findById(req.params.id));
  } catch {
    res.status(404).send("Review with the specified ID does not exist");
  }
}

//or:
// async function getOneActor(req, res) {
//     const review = Review.findById(req.params.id)
//     if (review=true) {return res.json(review)}
//     else {res.status(404).send("Review with the specified ID does not exist");}
// }
