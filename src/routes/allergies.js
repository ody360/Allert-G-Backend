const router = require('express').Router()
const ctrl = require('../controllers/allergies')
//const auth = require('../lib/auth')

router.get('/', ctrl.getAllAllergies)

module.exports = router
