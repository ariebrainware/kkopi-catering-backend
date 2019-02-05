const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.show)
router.post('/add', controller.create)

module.exports = router
