const sequelize = require("sequelize")


  
module.exports = (sequelize, type) => {
return sequelize.define("Actor", {
  // createdAt: false,
  // updatedAt: false,
  name:{type: type.STRING},
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  edad: {
    type: type.INTEGER,
  },
  peso: {
    type: type.INTEGER,
  },
  historia: {
    type: type.STRING,
  },
  imagen: {
    type: type.STRING,
  },
})
}


