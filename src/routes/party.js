const router = require('express').Router()
const ctrl = require('../controllers/party')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.getParty)
router.get('/all/:partyId', auth.isLoggedIn, ctrl.getPartyMembers)
router.get('/all', auth.isLoggedIn, ctrl.getAllParties)
router.get('/:id', ctrl.getMembersId)
router.delete('/all/:partyId', auth.isLoggedIn, ctrl.deleteParty);
router.post('/', auth.isLoggedIn, ctrl.createParty)

module.exports = router
