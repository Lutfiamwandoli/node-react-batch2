const express = require('express')
const { createMovie, readMovie, updateMovie, readMovieById, deleteMovie } = require('../controllers/movieController')
const router = express.Router()


router.post('/movie', createMovie)
router.get('/movie', readMovie)
router.put('/movie/:id', updateMovie)
router.get('/movie/:id', readMovieById)
router.delete('/movie/:id', deleteMovie)

module.exports = router