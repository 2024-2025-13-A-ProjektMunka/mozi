const path = require("node:path");
const Film = require("../models/Film");

exports.getEgyediFilm = async (req, res) => {
  const parameterek = req.params;
  const film = await Film.findById(parameterek.id);
  try {
    const viewsUt = path.join(__dirname, "..", "views", "film.ejs");
    res.status(200).render(viewsUt, { film });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
