const express = require('express')

const { userLogin, userSignup } = require('../controllers/userController')

const router = express.Router()


// login routes
router.post('/login', userLogin)

// signup routes
router.post('/signup', userSignup)

module.exports = router