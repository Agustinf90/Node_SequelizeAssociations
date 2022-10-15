const { movie, Actors } = require("../database");



module.exports = (sequelize, DataTypes) => {
    return sequelize.define("CharacterMovies", {
      MovieId: {
        type: DataTypes.INTEGER,
        references: {
          model: movie, // 'Movies' would also work
          key: 'id'
        }
      },
      ActorId: {
        type: DataTypes.INTEGER,
        references: {
          model: Actors, // 'Actors' would also work
          key: 'id'
        }
      }
         });
  };

