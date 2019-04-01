const express = require('express')
const router = express.Router()
const userRoutes = require('./user')
const controller = require('../controllers/user')




router.use('/api/users', userRoutes)

router.post('/api/signup', controller.signup)
router.post('/api/signin', controller.signin)


module.exports = router
