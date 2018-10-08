const router = require('express').Router()
const ctrl = require('../controllers/profiles')
const auth = require('../lib/auth')

//router.get('/', auth.isLoggedIn, ctrl.getAllProfiles)
router.get('/', auth.isLoggedIn, ctrl.getProfile)
router.get('/allergies', auth.isLoggedIn, ctrl.getProfileAllergies);
router.post('/allergies', auth.isAuthorized, ctrl.postProfileAllergies);
router.get('/all', ctrl.getAllProfiles)

module.exports = router
