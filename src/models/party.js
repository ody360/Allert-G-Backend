const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')

function getParty (id) {
  return db('users_party')
    .select('*').innerJoin('party', 'party_id', '=', 'party.id')
    .where('users_id', id)
    .returning('*')
}

function getAllParties (id) {
  return db('users_party')
    .select('*').innerJoin('party', 'party_id', '=', 'party.id')
    .where('users_id', id)
    .returning('*')
}

function getPartyMembers (id, partyId) {
  return db('users_party')
    .returning('party_id')
    .where('users_id', id)
    .select('party_id')
    .then(function (res) {
      return db('users_party')
        .where('party_id', partyId)
        .select('users_id')
        .returning('*')
    })
}

function getMembersId (id) {
  let memberInfo
  return db('users')
    .innerJoin('medhx', 'users.id', '=', 'medhx.users_id')
    .innerJoin('medication', 'users.id', '=', 'medication.users_id')
    .where('users.id', id)
    .returning('*')
    .then(function (res) {
      memberInfo = res[0]
      return db('allergies')
        .innerJoin('users_allergies', 'allergies_id', '=', 'allergies.id')
        .where('users_id', res[0].id)
        .returning('*')
    }).then(function (res) {
      memberInfo.allergies = []
      for (let i of res) {
        memberInfo.allergies.push(i.allergy_name)
      }

      return memberInfo
    })
}

function deleteParty (users_id, party_id) {
  return db('party')
    .where('party.id', party_id)
    .del()
    .returning('*')
}

function createParty (body) {
  const name = body.name
  let partyData = []
  return db('party')
    .insert({ name })
    .returning('id')
    .then((res) => {
      const data = body.membersArray.map(p => {
        partyData.push({ users_id: p, party_id: res[0] })
      })
      
      return db('users_party')
        .insert(partyData)
        .returning('*')
    })
}

function updatePartyMembers(body, party_id,) {
  let data = body.map((p) => {
    return { party_id, users_id: p }
  })
  return db('users_party')
		.where('party_id', party_id)
		.del()
		.then(res => {
			return db('users_party')
				.insert(data)
				.returning('*');
		});
}

module.exports = {
  getParty,
  getPartyMembers,
  updatePartyMembers,
  getMembersId,
  getAllParties,
  deleteParty,
  createParty
}
