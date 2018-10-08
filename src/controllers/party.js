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
    
    const data = await model.getPartyMembers(userId)
    console.log('DATA RECVD FOR GETPARTYMEMBERS:   !!!!!!!!!', data)
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

// async function postProfileAllergies(req, res, next) {
//   try {
//     const token = parseToken(req.headers.authorization);
//     const userId = token.sub.id;
//     const data = await model.postProfileAllergies(userId, req.body)
//     res.status(200).json({
//       data
//     })
//   } catch (err) {
//     next({
//       status: 404,
//       message: err.message
//     })
//   }
// }

module.exports = {
  getParty,
  getPartyMembers
}
