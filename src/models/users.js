const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')

async function create ({ password, medhx, medication, allergies_id, ...body }) {
  const hashed = await promisify(bcrypt.hash)(password, 8)
  console.log('IN CREATE USER WITH INFORMATION: ', body)
  return db('users')
    .insert({ ...body, password: hashed })
    .returning('*')
    .then(function (response) {
      console.log('In Med HX after initial insert. RESP is:  ', response)
      return db('medhx')
        .insert({users_id: response[0].id, medhx: medhx})
        .returning('*')
    })
    .then(function (response) {
      console.log('In medications: ', response)
      return db('medication')
			.insert({ users_id: response[0].id, medication: medication })
			.returning('*');
    })
}

async function login({ email, password }) {
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
  create, login
}
