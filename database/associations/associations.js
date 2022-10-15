const { Genre, Movies, Characters, movie, Actors, charactersMovies } = require("../database");
const DataTypes = require('mysql');
const sequelize = require("sequelize");
const CharacterMovies = require("./characterMovies.model copy");

  movie.belongsToMany(Actors, { through: charactersMovies });
  Actors.belongsToMany(movie, { through: charactersMovies });


//   Movies.belongsToMany(Characters, { through: CharacterMovies });
//   Characters.belongsToMany(Movies, { through: CharacterMovies });

Genre.hasMany(movie, {
    foreignKey: "genreId"
  });
  movie.belongsTo(Genre), {
    foreignKey: "id",
    target_key: "genreId"
  };

