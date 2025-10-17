const express = require('express')
const { createMovie, readMovie, updateMovie, readMovieById, deleteMovie } = require('../controllers/movieController')
const { basicAuth } = require('../middleware/basicAuth')
const { createCategory, readCategory, updateCategory, readCategoryById, deleteCategory } = require('../controllers/categoryController')
const router = express.Router()
const { register, login } = require('../controllers/userController')
const { authJWT } = require('../middleware/auth')



router.post('/movie', authJWT, createMovie)
router.get('/movie', readMovie)
router.put('/movie/:id', basicAuth, updateMovie)
router.get('/movie/:id', readMovieById)
router.delete('/movie/:id', basicAuth, deleteMovie)
router.post('/category', authJWT, createCategory)
router.get('/category', readCategory)
router.put('/category/:id', basicAuth, updateCategory)
router.get('/category/:id', readCategoryById)
router.delete('/category/:id', basicAuth, deleteCategory)
router.post('/register', register)
router.post('/login', login)


module.exports = router