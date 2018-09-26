const router = require('express').Router()
const ctrl = require('../controllers/profiles')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.getAllProfiles)
router.get('/:profileId', auth.isLoggedIn, ctrl.getProfile)

module.exports = router
