const Sequelize = require("sequelize");
const UserModel = require("../components/users/model/users.model");
const GenreModel = require("../components/genre/model/genre.model")
const { config } = require("../config");
const ActorsModel = require("../components/characters/model/characters.model")
const MovieModel = require("../components/movies/model/movie.model")
const CharactersMovieModel = require("../database/associations/characterMovies.model copy")


const sequelize = new Sequelize({
  database: config.db,
  username: config.db_username,
  password: config.db_pass,
  host: config.db_host,
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});


const User = UserModel(sequelize, Sequelize);
const Genre = GenreModel(sequelize, Sequelize)
const Actors = ActorsModel(sequelize, Sequelize)
const movie = MovieModel(sequelize, Sequelize)
const charactersMovies = CharactersMovieModel(sequelize, Sequelize)




module.exports = {
  User,
  Genre,
  Actors,
  movie,
  charactersMovies
};
sequelize.sync({ force: false }).then(() => {
  console.log("tables syncronized");
}).then(async() => {
  // migraciones
  // let genre1 = await Genre.create({nombre: 'Suspenso'})
  // let genre2 = await Genre.create({nombre: 'Drama'})
  // let genre3 = await Genre.create({nombre: 'Comedia'})
  // let genre4 = await Genre.create({nombre: 'Comedia Romantica'})

  // let movie1 = await movie.create({name: 'Jurasic Park', genreId: 1, fecha: 1993, calificacion: 10,imagen: "asdgasd"})
  // let movie2 = await movie.create({name: 'Aladin', genreId: 4, fecha: 1993, calificacion: 9,imagen: "asdgasd"})
  // let movie3 = await movie.create({name: 'El rey león', genreId: 2, fecha: 1994, calificacion: 10,imagen: "asdgasd"})
  // let movie4 = await movie.create({name: 'Dr. Dolittle', genreId: 3, fecha: 1998, calificacion: 6,imagen: "asdgasd"})
  // let movie5 = await movie.create({name: 'La Dama y el vagabundo', genreId: 4, fecha: 1995, calificacion: 8,imagen: "asdgasd"})

  // let actor1 = await Actors.create({name: 'Mufasa', edad: 20, peso: 100, historia: "sadgsag", imagen: "asdgasd"})
  // let actor2 = await Actors.create({name: 'T-Rex', edad: 10, peso: 5000, historia: "sadgsag", imagen: "asdgasd"})
  // let actor3 = await Actors.create({name: 'El genio', edad: 999, peso: 0, historia: "sadgsag", imagen: "asdgasd"})
  // let actor4 = await Actors.create({name: 'Will Smith', edad: 55, peso: 80, historia: "sadgsag", imagen: "asdgasd"})
  // let actor5 = await Actors.create({name: 'Vagabundo', edad: 5, peso: 10, historia: "sadgsag", imagen: "asdgasd"})

  // movie3.addActors(actor1)
  // movie1.addActors(actor2)
  // movie2.addActors(actor3)
  // movie4.addActors(actor4)
  // movie2.addActors(actor4)
  // movie5.addActors(actor5)
});