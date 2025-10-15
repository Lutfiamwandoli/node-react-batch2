const express = require('express')
const { createNilai, getNilai, updateNilai, deleteNilai } = require('../controllers/nilaiController')
const router = express.Router()


router.post('/nilai', createNilai)
router.get('/nilai', getNilai)
router.put('/nilai/:id', updateNilai)
router.delete('/nilai/:id', deleteNilai)

module.exports = router