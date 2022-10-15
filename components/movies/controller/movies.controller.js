const { movie, Actors } = require("../../../database/database");
require("../../../database/associations/associations")

async function getMovies(req, res) {
  let movies = await movie.findAll({
 attributes: [
 'name', 'id'
  ]
});
  res.json(movies);
}

async function getMovieDetail(req, res) {
  let movies = await movie.findAll({
      include    : [{ model: Actors, attributes: ['name', 'id']}]
});
  res.json(movies);
}

async function getMovieById(req, res) {
  if(req.query.name){
    let movieName = req.query.name
    let movieActual = await movie.findOne({ where: { name: movieName } });
    res.json(movieActual)
  }

  if(req.query.genreId){
    let movieGenre = req.query.genreId  
    let movieGenreActual = await movie.findAll({where: {genreId : movieGenre}})
    res.json(movieGenreActual);
  }

  if(req.query.order === 'ASC'){
    let movieOrderActual = await movie.findAll({order: [['name', 'ASC'],]});
    res.json(movieOrderActual);
  }
  if(req.query.order === 'DESC'){
    let movieOrderActual = await movie.findAll({order: [['name', 'DESC'],]});
    res.json(movieOrderActual);
  }
}

async function createMovies(req, res) {
  const movies = await movie.create(req.body);
  res.json(movies);
}

async function updateMovie(req, res) {
  await movie.update(req.body, {
    where: { id: req.params.movieId },
  });
  res.json({ success: "modificado" });
}

async function deleteMovie(req, res) {
  await movie.destroy({
    where: { id: req.params.movieId },
  });
  res.json({ success: "eliminado" });
}
module.exports = {
  getMovies,
  getMovieDetail,
  getMovieById,
  createMovies,
  updateMovie,
  deleteMovie,
};
