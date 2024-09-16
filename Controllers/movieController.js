const { Movie } = require("../Models");

module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};

async function getAllMovies(req, res) {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getOneMovie(req, res) {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).send("Movie with the specified ID does not exists");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  } //why do we need the catch if we have an else?
}

async function createMovie(req, res) {
  try {
    const movie = await new Movie(req.body);
    await movie.save();
    return res.status(201).json({ movie });
  } catch (e) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateMovie(req, res) {
  try {
    const id = req.params.id;
    const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    if ((movie = true)) {
      return res.status(200).json(movie);
    }
    throw new Error("movie not found"); //what is throw?
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

async function deleteMovie(req, res) {
  try {
    let movie = await Movie.findByIdAndDelete(req.params.id);
    if ((movie = true)) {
      return res.status(200).json(movie);
    }
    throw new Error("movie not found");
  } catch (e) {
    return res.status(500).send(error.message);
  }
}
