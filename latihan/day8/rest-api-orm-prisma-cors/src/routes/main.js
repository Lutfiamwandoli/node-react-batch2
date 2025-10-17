const express = require('express')
const { createMovie, readMovie, updateMovie, readMovieById, deleteMovie } = require('../controllers/movieController')
const { basicAuth } = require('../middleware/basicAuth')
const { createCategory, readCategory, updateCategory, readCategoryById, deleteCategory } = require('../controllers/categoryController')
const router = express.Router()


router.post('/movie', basicAuth, createMovie)
router.get('/movie', readMovie)
router.put('/movie/:id', basicAuth, updateMovie)
router.get('/movie/:id', readMovieById)
router.delete('/movie/:id', basicAuth, deleteMovie)
router.post('/category', basicAuth, createCategory)
router.get('/category', readCategory)
router.put('/category/:id', basicAuth, updateCategory)
router.get('/category/:id', readCategoryById)
router.delete('/category/:id', basicAuth, deleteCategory)


module.exports = router