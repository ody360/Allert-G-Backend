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
    
    const data = await model.getProfilesAllergies(userId)


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
    const token = parseToken(req.headers.authorization)
	  const userId = token.sub.id
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

async function updateProfileAllergies (req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id
    const data = await model.updateProfileAllergies(userId, req.body)
    res.status(200).json({
      data
    })
  } catch (err) {
    next({
      status: 404,
      message: `Update Error ${err.message}`
    })
  }
}


async function updateProfile (req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id
    const data = await model.updateProfile(userId, req.body)
    res.status(200).json({
      data
    })
  } catch (e) {
    next({
      status: 404,
      message: e.message
    })
  }
}

async function updateMedHxs (req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
		const userId = token.sub.id
    const data = await model.updateMedHxs(userId, req.body)
		res.status(200).json({
      data
    })
	} catch (e) {
    next({
      status: 404,
      message: e.message
    })
	}
}

async function updateMeds (req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
		const userId = token.sub.id
    const data = await model.updateMeds(userId, req.body)
		res.status(200).json({
      data
    })
	} catch (e) {
    next({
      status: 404,
      message: e.message
    })
	}
}

module.exports = {
  getAllProfiles,
  getProfileAllergies,
  getProfile,
  postProfileAllergies,
  updateProfileAllergies,
  updateProfile,
  updateMedHxs,
  updateMeds
}
