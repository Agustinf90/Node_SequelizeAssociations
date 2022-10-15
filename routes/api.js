const router = require('express').Router();

const auth = require('../middlewares/auth')
const apiMoviesRouter = require('../components/movies/movies.route')
const apiUsersRouter = require('../components/users/users.route')
const apiCharactersRouter = require('../components/characters/characters.route')
const apiGenreRouter = require("../components/genre/genre.route")
const apiImagesRouter = require('../components/images/images.route')



router.use('/movies' ,apiMoviesRouter)
router.use('/users', apiUsersRouter)
router.use('/characters', auth.checkToken, apiCharactersRouter)
router.use('/upload', apiImagesRouter)
router.use('/genre', apiGenreRouter)


module.exports = router;