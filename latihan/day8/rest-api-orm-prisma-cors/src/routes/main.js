const express = require('express')
const { createMovie, readMovie, updateMovie, readMovieById, deleteMovie } = require('../controllers/movieController')
const { basicAuth } = require('../middleware/basicAuth')
const router = express.Router()


router.post('/movie', basicAuth, createMovie)
router.get('/movie', readMovie)
router.put('/movie/:id', basicAuth, updateMovie)
router.get('/movie/:id', readMovieById)
router.delete('/movie/:id', basicAuth, deleteMovie)

module.exports = router