const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.show)
router.post('/login', controller.login)

module.exports = router
