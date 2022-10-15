const router = require("express").Router();
const mysql = require("mysql");

const moviesController = require("./controller/movies.controller");

const auth = require("../../middlewares/auth");

// const isAdmin = require("../../middlewares/isAdmin");

router.get("/", auth.checkToken, moviesController.getMovies);
router.get("/detail", auth.checkToken, moviesController.getMovieDetail)
router.get("/movie", auth.checkToken, moviesController.getMovieById);
router.post("/", auth.checkToken, moviesController.createMovies);
router.put("/:movieId", auth.checkToken, moviesController.updateMovie);
router.delete("/:movieId",auth.checkToken, moviesController.deleteMovie);

module.exports = router;
