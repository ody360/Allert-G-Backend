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
    .innerJoin('allergies', 'users.id', '=', 'allergies.users_id')
    .innerJoin('medhx', 'users.id', '=', 'medhx.users_id')
    .innerJoin('medication', 'users.id', '=', 'medication.users_id')   
}

function getProfilesAllergies(id) {
  return db('users')
    .innerJoin('allergies', 'users.id', '=', 'allergies.users_id')
    .where('users.id', id).select('name')
}

module.exports = {
  getAllProfiles,
  getFullProfile,
  getProfilesAllergies,
  getProfile
}
