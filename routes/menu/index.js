const express = require('express')
const router = express.Router()

const controller = require('./controller')
const authToken = require('../auth/auto-token')

router.get('/', authToken.verifyToken, controller.show)
router.post('/create', authToken.verifyToken, controller.create)
router.delete('/delete/:id', authToken.verifyToken, controller.delete)
router.delete('/delete', authToken.verifyToken, controller.delete)
router.put('/update/:id', authToken.verifyToken, controller.update)
router.put('/update', authToken.verifyToken, controller.update)

module.exports = router
