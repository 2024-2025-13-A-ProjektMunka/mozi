const path = require("node:path");
const Film = require("../models/Film");

exports.getUjFilm = (req, res) => {
  try {
    const viewsUt = path.join(__dirname, "..", "views", "ujFilm.ejs");
    res.status(200).render(viewsUt);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.postUjFilm = async (req, res) => {
  const parameterek = req.body;
  console.log(parameterek);
  // const film = await Film.findById(parameterek.id);
  try {
    res.status(200).json({ msg: "Sikeres film felvétel!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
