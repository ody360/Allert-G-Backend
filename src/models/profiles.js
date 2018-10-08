const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')


function getAllProfiles () {
  return db('users')
}

// function getProfile (id) {
//   return db('users').where({ id })
// }

function getFullProfile (id) {
  return db('users')
    .innerJoin('medhx', 'users.id', '=', 'medhx.users_id')
    .innerJoin('medication', 'users.id', '=', 'medication.users_id')
    .where('users.id', id)
}

function getProfilesAllergies(id) {
  return db('allergies')
    .innerJoin('users_allergies', 'allergies_id', '=', 'allergies.id')
    .where('users_id', id)
}

function postProfileAllergies(id,body) {
  const data = {
    users_id: id,
    allergies_id: body.allergies_id
  }

  console.log('DATA TO POST ALLERGIES IS: ', data)
  return db('users_allergies')
		.insert(data)
		.returning('*')
}

module.exports = {
	getAllProfiles,
	getFullProfile,
	getProfilesAllergies,
	// getProfile
	postProfileAllergies
};
