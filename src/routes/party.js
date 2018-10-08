const router = require('express').Router()
const ctrl = require('../controllers/party')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.getParty)
router.get('/all', auth.isLoggedIn, ctrl.getPartyMembers)
// router.post('/', auth.isLoggedIn, ctrl.createParty)

module.exports = router
