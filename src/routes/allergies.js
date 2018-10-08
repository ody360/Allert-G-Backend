const router = require('express').Router()
const ctrl = require('../controllers/allergies')
//const auth = require('../lib/auth')

router.get('/', ctrl.getAllAllergies)
router.get('/:allergyId', ctrl.getAllergy)
router.post('/', ctrl.addAllergy)

module.exports = router
