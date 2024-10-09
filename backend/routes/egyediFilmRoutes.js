const express = require("express");
const { getEgyediFilm } = require("../controllers/egyediFilmRouteControllers");

const router = express.Router();

router.get("/:id", getEgyediFilm);

module.exports = router;
