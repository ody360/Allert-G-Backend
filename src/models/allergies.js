const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')

function getAllAllergies () {
  return db('allergies').select('id', 'allergy_name', 'checked')
}

function addAllergy (allergy_name) {
  return db('allergies')
    .insert(allergy_name)
    .returning('*')
}

module.exports = {
  getAllAllergies,
  addAllergy
}
