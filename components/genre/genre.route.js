const router = require("express").Router();
const mysql = require("mysql");

const genresController = require("./controller/genre.controller");

// const isAdmin = require("../../middlewares/isAdmin");

router.get("/", genresController.getGenres);
router.get("/:genreId", genresController.getGenres);
router.post("/", genresController.createGenres);
router.put("/:genreId", genresController.updateGenre);
router.delete("/:genreId", genresController.deleteGenre);

module.exports = router;
