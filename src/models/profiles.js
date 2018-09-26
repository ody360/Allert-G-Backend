const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')


function getAllProfiles () {
  return db('users')
}

function getProfile (id) {
  return db('users').where({ id })
}

function getFullProfile (id) {
  return db()
}

module.exports = {
  getAllProfiles,
  getProfile
}
