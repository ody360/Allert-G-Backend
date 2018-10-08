const table = 'users_allergies'
exports.seed = knex => {
  return knex(table)
    .insert([
      {
        id: 1,
        users_id: 1,
        allergies_id: 3
      },
      {
        id: 2,
        users_id: 1,
        allergies_id: 1
      },
      {
        id: 3,
        users_id: 2,
        allergies_id: 2,
      },
      {
        id: 4,
        users_id: 2,
        allergies_id: 4,
      },
      {
        id: 5,
        users_id: 3,
        allergies_id: 1,
      },
      {
        id: 6,
        users_id: 4,
        allergies_id: 1,
      }
    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
}
