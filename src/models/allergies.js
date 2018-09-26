const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')

function getAllAllergies() {
  return db('allergies')
}

module.exports = {
	getAllAllergies,
}
