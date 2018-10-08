const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')

async function create ({ password, medhx, medication, allergies, allergies_id, isReady, accepted, ...body }) {
  const hashed = await promisify(bcrypt.hash)(password, 8)
  return db('users')
    .insert({ ...body, password: hashed })
    .returning('*')
    .then(function (response) {
      return db('medhx')
        .insert({ users_id: response[0].id, medhx: medhx })
        .returning('*')
    })
    .then(function (response) {
      return db('medication')
        .insert({ users_id: response[0].id, medication: medication })
        .returning('*')
    })
    .then(([response]) => response)
}

async function addUserAllergies (users_id, allergies_id) {
  console.log('ABOUT TO POST NEW USER ALLERGIES: ', users_id, allergies_id)

  return db('users_allergies')
    .insert({ users_id, allergies_id })
    .returning('*')
    .then(response => { console.log('THIS IS RESPONSE: ', response) })
}

async function login ({ email, password }) {
  return db('users')
    .where({ email })
    .then(async ([user]) => {
      if (!user) throw new Error()

      const isValid = await promisify(bcrypt.compare)(password, user.password)
      if (!isValid) throw new Error()

      return user
    })
}

module.exports = {
  create,
  login,
  addUserAllergies
}
