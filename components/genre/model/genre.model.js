const { Genre, movie } = require("../../../database/database");

module.exports = (sequelize, type) => {
  return sequelize.define("genre", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: type.STRING,
    imagen: {
      type: type.STRING,
    }
  });

 
};
