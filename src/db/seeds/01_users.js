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
      },
      {
        id: 3,
        first_name: 'Diana',
        last_name: 'Prince',
        email: 'wo@man.com',
        password: hashSync('1234qwer'),
        birthdate: '1978-08-04',
        sex: 'f',
        home_phone: '3604790142',
        cell_phone: '3601111111',
        emergency1: '3602222222',
        emergency2: '3603333333'
      },
      {
        id: 4,
        first_name: 'Barry',
        last_name: 'Allen',
        email: 'flash@man.com',
        password: hashSync('1234'),
        birthdate: '1978-08-04',
        sex: 'm',
        home_phone: '3604790142',
        cell_phone: '3601111111',
        emergency1: '911',
        emergency2: '411'
      },
      {
        id: 5,
        first_name: 'Hedim',
        last_name: 'Ramirez',
        email: 'hedim@g.com',
        password: hashSync('1234'),
        birthdate: '1978-08-04',
        sex: 'm',
        home_phone: '3604790142',
        cell_phone: '3605254816',
        emergency1: '911',
        emergency2: '411',
        img_URL: 'https://www.facebook.com/photo.php?fbid=10155974153829259&l=41e927ea27'
      }
    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
};
