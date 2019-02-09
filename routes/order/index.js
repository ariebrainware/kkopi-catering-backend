const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.show)
router.post('/create', controller.create)
router.delete('/delete/:id', controller.delete)
router.delete('/delete', controller.delete)
router.put('/update/:id', controller.update)
router.put('/update', controller.update)

module.exports = router
