
const { Characters, Genre, movie, Actors, charactersMovies } = require("../../../database/database");

async function getCharacters(req, res) {
  const actors = await Actors.findAll({
    attributes: [
      'name', 'id'
       ]
  });
  res.json(actors);
}

async function getCharacterDetail(req, res) {
  let actors = await Actors.findAll({
    include: {
      model: movie
    },
});
  res.json(actors);
}


async function getCharacterById(req, res) {
  if(req.query.name){
    let actorName = req.query.name
    let actorActual = await Actors.findOne({ where: { name: actorName } });
    res.json(actorActual)
  }

  if(req.query.edad){
    let actorAge = req.query.edad
    let actorActual = await Actors.findOne({ where: { edad: actorAge } });
    res.json(actorActual)
  }

  if(req.query.movieId){
    let movieId = req.query.movieId  
    let movieGenreActual = await movie.findAll({where: {id : movieId},attributes: ['name', 'id'],
      include    : [{ model: Actors}]})
    res.json(movieGenreActual);
  }

  // if(req.query.order === 'ASC'){
  //   let movieOrderActual = await movie.findAll({order: [['name', 'ASC'],]});
  //   res.json(movieOrderActual);
  // }
  // if(req.query.order === 'DESC'){
  //   let movieOrderActual = await movie.findAll({order: [['name', 'DESC'],]});
  //   res.json(movieOrderActual);
  // }
}

async function createCharacters(req, res) {
  const actors = await Actors.create(req.body);
  res.json(actors);
}

async function updateCharacter(req, res) {
  await Actors.update(req.body, {
    where: { id: req.params.characterId },
  });
  res.json({ success: "modificado" });
}

async function deleteCharacter(req, res) {
  await Actors.destroy({
    where: { id: req.params.characterId },
  });
  res.json({ success: "eliminado" });
}



module.exports = {
  getCharacters,
  getCharacterDetail,
  getCharacterById,
  createCharacters,
  updateCharacter,
  deleteCharacter,
};

