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
  return db('users')
    .innerJoin('health', 'users.id', '=', 'health.users_id')
    .innerJoin('medhx', 'medhx.id', '=', 'health.medhx_id')
    .innerJoin('medication', 'medication.id', '=', 'health.medication_id')
    .innerJoin('health_allergies', 'health.id', '=', 'health_id')
    .innerJoin('allergies', 'allergies_id', '=', 'allergies.id')
    .where('users_id', id).select('first_name', 'name')
    
    
}

module.exports = {
  getAllProfiles,
  getFullProfile,
  getProfile
}
