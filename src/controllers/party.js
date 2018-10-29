const model = require('../models/party')
const { parseToken } = require('../lib/auth')

async function getParty (req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const data = await model.getParty(userId)

    res.status(200).json({
      data
    })
  } catch (err) {
    next({ status: 404, message: `Could not get parties ${err.message}` });
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
      message: `Could not get all parties ${err.message}`
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
   
    const data = await model.createParty(req.body)
    
    res.status(200).json({
      data
    })
  } catch (e) {
    console.log('ERR:', e)
    next({
      status: 400,
      error: `Group could not be added: ${e}`
    })
  }
}

async function updatePartyMembers (req, res, next) {
  try{ 
    
    const data = await model.updatePartyMembers(req.body, req.params.partyId)

    res.status(200).json({
      data
    })

  } catch (e) {
    next({ status: 400, error: `Group could not be updated`, e })
  }
}
module.exports = {
  getParty,
  getPartyMembers,
  updatePartyMembers,
  getMembersId,
  getAllParties,
  deleteParty,
  createParty
}
