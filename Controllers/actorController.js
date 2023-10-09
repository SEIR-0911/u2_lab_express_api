const { Actor } = require("../Models");

module.exports = {
  getAllActors,
  getOneActor,
};

async function getAllActors(req, res) {
  try {
    res.json(await Actor.find());
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getOneActor(req, res) {
  const { id } = req.params;
  const actor = await Actor.findById(id);
  if (actor) {
    return res.json(actor);
  } else {
    res.status(404).send("Actor with the specified ID does not exist");
  }
} 
// const getPlantById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const plant = await Plant.findById(id)
//         if (plant) {
//             res.json(plant);
//         }
//         return res.status(404).send('Plant with the specified ID does not exists');
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }
