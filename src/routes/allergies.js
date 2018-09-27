const router = require('express').Router()
const ctrl = require('../controllers/allergies')
//const auth = require('../lib/auth')

router.get('/', ctrl.getAllAllergies)
router.post('/', ctrl.addAllergy)

module.exports = router
