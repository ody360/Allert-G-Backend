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

function getProfilesAllergies (id) {
  return db('allergies')
    .innerJoin('users_allergies', 'allergies_id', '=', 'allergies.id')
    .where('users_id', id)
}

function postProfileAllergies (id, body) {
  const data = {
    users_id: id,
    allergies_id: body.allergies_id
  }

  
  return db('users_allergies')
    .insert(data)
    .returning('*')
}

function updateProfile (id, body) {
  return db('users')
    .where('users.id', id)
    .update({
      home_phone: body.home_phone,
      cell_phone: body.cell_phone,
      emergency1: body.emergency1,
      emergency2: body.emergency2,
      img_URL: body.img_URL,
      updated_at: new Date()
    })
  .returning('*')
}

function updateProfileAllergies (id, body) {
  let allergies = body.allergies

  const allergyData = allergies.map((a) => {
    return { users_id: id, allergies_id: a }
  })
  console.log('ALLERGY DATA UPDATED: ', allergyData)
  return db('users_allergies')
    .where('users_id', id)
    .del()
    .then((res) => {
      return db('users_allergies')
        .insert(allergyData)
        .returning('*')
    })
}

function updateMedHxs (id, body) {
  return db('medhx')
    .where('users_id', id)
    .update({
      medhx: body,
      updated_at: new Date()
    })
    .returning('*')
}

function updateMeds (id, body) {
  return db('medication')
    .where('users_id', id)
    .update({
      medication: body,
      updated_at: new Date()
    })
    .returning('*')
}

module.exports = {
  getAllProfiles,
  getFullProfile,
  getProfilesAllergies,
  // getProfile
  postProfileAllergies,
  updateProfileAllergies,
  updateProfile,
  updateMedHxs,
  updateMeds
}
