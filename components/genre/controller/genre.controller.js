const { Genre, movie } = require("../../../database/database");

async function getGenres(req, res) {
  let genre = await Genre.findAll({
    include: {
      model: movie
    },
  });
  res.json(genre);
}

async function getGenresById(req, res) {
  let genreId = Number(req.params.genreId);
  let genreActual = await Genre.findOne({ where: { id: genreId } });
  res.json(genreActual);
}

async function createGenres(req, res) {
  const genre = await Genre.create(req.body);
  res.json(genre);
}

async function updateGenre(req, res) {
  await Genre.update(req.body, {
    where: { id: req.params.genreId },
  });
  res.json({ success: "modificado" });
}

async function deleteGenre(req, res) {
  await Genre.destroy({
    where: { id: req.params.genreId },
  });
  res.json({ success: "eliminado" });
}
module.exports = {
  getGenres,
  getGenresById,
  createGenres,
  updateGenre,
  deleteGenre,
};
