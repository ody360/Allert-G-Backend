const model = require('../models/party')
const { parseToken } = require('../lib/auth')

async function getParty (req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const data = await model.getParty(userId)

    console.log('PARTY TO RETURN IS:!!!!', data)
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

async function getAllParties (req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const data = await model.getAllParties(userId)
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

async function getPartyMembers (req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const data = await model.getPartyMembers(userId, req.params.partyId)
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

async function getMembersId (req, res, next) {
  try {
    const data = await model.getMembersId(req.params.id)
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

async function deleteParty ( req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id
    const data = await model.deleteParty(userId, req.params.partyId)

    res.status(201).json({
      data
    })
  } catch (err) {
    next({
      status: 404,
      message: err.message,
    })
  }
}

async function createParty ( req, res, next ) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    console.log('IN CREATE PARTY WITH INFO: ', userId, req.body)
    const data = await model.createParty(userId, req.body)
    console.log('RES:', res)
    res.status(200).json({
      data
    })
  } catch (e) {
    console.log('ERR:', e)
    next({
      status: 400,
      error: `Group could not be added`
    })
  }
}

module.exports = {
  getParty,
  getPartyMembers,
  getMembersId,
  getAllParties,
  deleteParty,
  createParty
}
