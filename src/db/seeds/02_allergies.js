const table = 'allergies'
exports.seed = knex => {
  return knex(table)
    .insert([
      {
        id: 1,
        name: 'peanut'

      },
      {
        id: 2,
        name: 'avocados'

      },
      {
        id: 3,
        name: 'kryptonite'
      },
      {
        id: 4,
        name: 'bats'
      }
    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
}
