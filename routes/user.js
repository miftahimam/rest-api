const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')


router.get('/', controller.list)
router.get('/:id', controller.read)
router.post('/', controller.add)
router.delete('/:id', controller.delete)
router.put('/:id', controller.update)



module.exports = router