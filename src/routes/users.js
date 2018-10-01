const router = require('express').Router()
const ctrl = require('../controllers/users')
const auth = require('../lib/auth')

router.post('/signup', ctrl.signup)
router.post('/login', ctrl.login)

module.exports = router
