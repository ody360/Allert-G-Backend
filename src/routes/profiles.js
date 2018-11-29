const router = require('express').Router()
const ctrl = require('../controllers/profiles')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.getProfile)
router.get('/allergies', auth.isLoggedIn, ctrl.getProfileAllergies)
router.post('/allergies', auth.isLoggedIn, ctrl.postProfileAllergies);
router.put('/allergies', auth.isLoggedIn, ctrl.updateProfileAllergies)
router.get('/all', ctrl.getAllProfiles)
router.put('/', auth.isLoggedIn, ctrl.updateProfile)
router.put('/medhx', auth.isLoggedIn, ctrl.updateMedHxs);
router.put('/meds', auth.isLoggedIn, ctrl.updateMeds);
//router.put('/medhxs', auth.isLoggedIn, ctrl.updateMedHxs)
//router.put('/meds', auth.isLoggedIn, ctrl.updateMeds)

module.exports = router
