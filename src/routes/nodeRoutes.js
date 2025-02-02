const express = require('express')
const { updateNote, getAllNotes, getNote, createNote} = require('../controllers/noteCrontroller')
const router = express.Router()

router.get('/:id', getNote)
router.get('/', getAllNotes)
router.post('/create', createNote)
router.put('/:id', updateNote)

module.exports = router

