const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')

function getAllAllergies() {
  return db('allergies')
}

function addAllergy(name) {
  return db('allergies')
    .insert(name)
    .returning('name')
}



module.exports = {
  getAllAllergies,
  addAllergy
}
