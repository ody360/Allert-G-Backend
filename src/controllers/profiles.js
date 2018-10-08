const model = require('../models/profiles')
const { parseToken } = require('../lib/auth')

// For Dev purposes to check all profiles
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
    let allergyResult = []

    const data = await model.getFullProfile(userId)
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
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id
    //console.log('IN GET USERPROFILEALLERGIES WITH TOKEN ID: ', userId)
    const data = await model.getProfilesAllergies(userId)

    console.log('GETTING APROF ALERGY DATA:!!!!!!!!!!!!!!!!!', data)
    
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

async function postProfileAllergies (req, res, next) {
  try {
    const token = parseToken(req.headers.authorization);
	  const userId = token.sub.id;
    const data = await model.postProfileAllergies(userId, req.body)
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
  getProfile,
  postProfileAllergies
}
