const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')

function getParty (id) {
  return db('users_party')
    .select('*').innerJoin('party', 'party_id', '=', 'party.id')
    .where('users_id', id)
    .returning('*')
    .then(function (response) {
      return db('party')
        .where('party.id', response[0].id)
        .returning('*')
    })
}

function getPartyMembers(id) {
	return db('users_party')
    .returning('party_id')
    .where('users_id', id)
    .select('party_id')
    .then(function(res) {
       return db('users_party')
			.where('party_id', res[0].party_id)
			.select('users_id')
			.returning('*')
     })
}

// function postProfileAllergies(id, body) {
//   const data = {
//     users_id: id,
//     allergies_id: body.allergies_id
//   }

//   console.log('DATA TO POST ALLERGIES IS: ', data)
//   return db('users_allergies')
//     .insert(data)
//     .returning('*')
// }

module.exports = {
  getParty,
  getPartyMembers

}
