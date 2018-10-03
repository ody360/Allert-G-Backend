const model = require('../models/profiles')
const { parseToken } = require('../lib/auth')

async function getAllProfiles (req, res, next) {
  const data = await model.getAllProfiles()
  res.status(200).json({
    data
  })
}

async function getProfile (req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id
    
    const data = await model.getFullProfile(userId)
    console.log('GETTING PROFILE DATA: ', data)
    res.status(200).json({
      data
    })
  } catch (err) {
    next({
      status: 404,
      message: err.message
    })
  }
}

async function getProfileAllergies (req, res, next) {
  try {
    const data = await model.getProfilesAllergies(req.params.profileId)
    res.status(200).json({
      data
    })
  } catch (err) {
    next({
      status: 404,
      message: err.message
    })
  }
}

module.exports = {
  getAllProfiles,
  getProfileAllergies,
  getProfile
}
