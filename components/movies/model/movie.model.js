const sequelize = require("sequelize")

module.exports = (sequelize, DataTypes) => {
return sequelize.define("Movie", {
  name: DataTypes.STRING,
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.INTEGER,
  },
  calificacion: {
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.STRING,
  }
})
}



