const model = require('../models/users')
const auth = require('../lib/auth')
const { parseToken } = require('../lib/auth')

async function signup (req, res, next) {
  try {
    const response = await model.create(req.body)
    const token = auth.createToken(response.id)

    res.status(201).json({ token })
  } catch (e) {
    next({ status: 400, error: `User could not be registered ${e}` })
  }
}

async function login (req, res, next) {
  try {
    const response = await model.login(req.body)
    const token = auth.createToken(response.id)

    res.json({ token })
  } catch (e) {
    next({ status: 401, error: e })
  }
}

async function getAll (req, res, next) {
  const token = parseToken(req.headers.authorization)
  const userId = token.sub.id

  const response = await model.getAll(userId)
  res.json({ ...response })
}

module.exports = {
  signup, login, getAll
}
