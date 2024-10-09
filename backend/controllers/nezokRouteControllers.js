const path = require("node:path");
const Film = require("../models/Film");
const Viewer = require("../models/Viewer");

exports.getNezok = async (req, res) => {
  try {
    const nezok = await Viewer.findOne({ nev: "Nagyapáti Rómeó" }).populate(
      "films"
    );
    console.log(nezok);
    const viewsUt = path.join(__dirname, "..", "views", "nezok.ejs");
    res.status(200).render(viewsUt);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
