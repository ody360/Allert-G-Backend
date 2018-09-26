const { hashSync } = require('bcryptjs')

const table = 'users';
exports.seed = knex => {
  return knex(table)
    .insert([
      {
        id: 1,
        first_name: 'Clark',
        last_name: 'Kent',
        email: 'super@man.com',
        password: hashSync('password'),
        birthdate: '1978-08-04',
        sex: 'm',
        home_phone: '3604790142',
        cell_phone: '3601111111',
        emergency1: '3602222222',
        emergency2: '3603333333'
      },
      {
        id: 2,
        first_name: 'Bruce',
        last_name: 'Wayne',
        email: 'bat@man.com',
        password: hashSync('password'),
        birthdate: '1978-08-04',
        sex: 'm',
        home_phone: '3604790142',
        cell_phone: '3601111111',
        emergency1: '3602222222',
        emergency2: '3603333333'
      }
    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
};
