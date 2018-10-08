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

function getAllergy(allergyId) {
  return db('allergies')
  .select('*')
  .where('allergies.id', allergyId)
}

module.exports = {
	getAllAllergies,
	addAllergy,
	getAllergy,
}
